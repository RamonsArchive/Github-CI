import { NextResponse } from "next/server"

export async function GET(request: Request) {
    try {
        const comments = await fetch("https://jsonplaceholder.typicode.com/comments")
        const data = await comments.json()
        return NextResponse.json({ status: "SUCCESS", error: "", data }, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ status: "ERROR", error: "Failed to fetch data", data: null }, { status: 500 })
    }
}