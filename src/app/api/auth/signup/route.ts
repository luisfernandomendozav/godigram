import { NextResponse } from "next/server"
import User from "@/models/user"
import { connectDB } from "@/libs/mongodb"
import bcrypt from "bcryptjs"

export async function POST(request: any) {
    const {username, email, password} = await request.json()
    
    if (!username) return NextResponse.json({
        message: "Username is required"
    }, {
        status: 400
    })

    if (!email) return NextResponse.json({
        message: "Email is required"
    }, {
        status: 400
    })

    if (!password) return NextResponse.json({
        message: "Password is required"
    }, {
        status: 400
    })

    if (password.length < 6) return NextResponse.json({
        message: "Password must be at least 6 characters"
    }, {
        status: 400
    })
    try {
        await connectDB()
        const userFound = await User.findOne({email})
        if (userFound) return NextResponse.json({
            message: "Email already exists"
        }, {
            status: 400
        })
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({
            email,
            password: hashedPassword,
            username
        })
        const savedUser = await user.save()
        console.log(savedUser)
        return NextResponse.json({
            message: savedUser
        }, {
            status: 200
        })
    
    } catch (error) {
        return NextResponse.json(error)
    }
    
}