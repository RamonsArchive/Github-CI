"use client";
import React, { useState } from 'react'
import { serverAction } from '../actions/server_action'
import { fetchCat } from '../actions/server_action'

const FetchDataButton = () => {
    const [data, setData] = useState<{source: string, data: any} | null>(null)
    const [error, setError] = useState<string | null>(null)


    // server action to fetch posts
    const handleFetchPosts = async () => {
        const result = await serverAction()
        console.log(result)
        if (result.status === "SUCCESS") {
            setData({source: "posts", data: result.data})
            setError(null)
        }
        else {
            console.error(result.error)
            setError(result.error || "An unknown error occurred")
            setData(null)
        }
    }

    // api route to fetch comments
    const handleFetchComments = async () => {
        const result = await fetch('/api/comments')
        const resultData = await result.json()
        console.log(resultData)
        if (resultData.status === "SUCCESS") {
            setData({source: "comments", data: resultData.data})
            setError(null)
        } else {
            console.error(resultData.error)
            setError(resultData.error)
            setData(null)
        }
    }

    // server action to fetch cat
    const handleFetchCatServerAction = async () => {
        const result = await fetchCat()
        console.log(result)
        if (result.status === "SUCCESS") {
            setData({source: "cat", data: result.data})
            setError(null)
        }
        else {
            console.error(result.error)
            setError(result.error || "An unknown error occurred")
            setData(null)
        }
    }

    // api route to fetch cat
    const handleFetchCatApiRoute = async () => {
        const result = await fetch('/api/cat')
        const data = await result.json()
        console.log(data)
        if (data.success) {
            setData({source: "cat", data: data.data})
        }
        else {
            console.error(data.error)
            setError(data.error)
            setData(null)
        }
    }

  return (
    <div className="flex flex-col w-full gap-2">
    <section className="flex flex-row gap-2">
        <button onClick={handleFetchPosts} className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md">
            Call Server Action
        </button>
        <button onClick={handleFetchComments} className="cursor-pointer bg-amber-500 text-white px-4 py-2 rounded-md">
            Call API Route
        </button>
        <button onClick={handleFetchCatServerAction} className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded-md">
            Fetch Cat
        </button>

    </section>
    {data && 
    <div className="flex flex-col w-full gap-5 bg-slate-200 p-2 rounded-md max-h-[500px] overflow-y-auto">
       {data && data.source === "posts" && data.data.map((item: any) => (
        <div key={item.id} className="flex flex-col w-full gap-1">
            <h3 className="text-sm text-black/80 font-bold">{item.title}</h3>
                <p className="text-sm text-black/80">{item.body}</p>
            </div>
        ))}
        {data && data.source === "comments" && data.data.map((item: any) => (
            <div key={item.id} className="flex flex-col w-full gap-1">
                <h3 className="text-sm text-black/80 font-bold">{item.name}</h3>
                <p className="text-sm text-black/80">{item.email}</p>
            </div>
        ))}
       
    </div>}
    {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default FetchDataButton