import { NextResponse } from '../../../../node_modules/next/server'

export function GET() {
    return NextResponse.json({
        message: "Hello World"
    })
}