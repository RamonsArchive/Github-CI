import { NextResponse } from "next/server"

export async function GET(request: Request) {
    try {
        const res = await fetch("https://api.thecatapi.com/v1/images/search")
        const data = await res.json()
        return NextResponse.json({ status: "SUCCESS", error: "", data }, { status: 200 })
    } catch (error) {
        console.error(error)    
        return NextResponse.json({ status: "ERROR", error: "Failed to fetch cat", data: null }, { status: 500 })
    }
}