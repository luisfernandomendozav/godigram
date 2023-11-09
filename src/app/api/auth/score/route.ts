import { NextResponse } from "next/server"
import Score from "@/models/score"
import { connectDB } from "@/libs/mongodb"

export async function POST(request: any) {
    const {username, score} = await request.json()
    
    if (!username) return NextResponse.json({
        message: "Username is required"
    }, {
        status: 400
    })

    if (!score) return NextResponse.json({
        message: "Score is required"
    }, {
        status: 400
    })

    try {
        await connectDB()
        const newScore = new Score({
            score,
            username
        })
        const savedScore = await newScore.save()
        console.log(savedScore)
        return NextResponse.json({
            message: savedScore
        }, {
            status: 200
        })
    
    } catch (error) {
        return NextResponse.json(error)
    }
    
}

export async function GET() {
    try {
        await connectDB()
        const allScores = await Score.find({});
        console.log(allScores)
        return NextResponse.json({
            message: allScores
        }, {
            status: 200
        })
    
    } catch (error) {
        return NextResponse.json(error)
    }
    
}