"use client";
import React, { useState } from 'react'
import { serverAction } from '../actions/server_action'

const FetchDataButton = () => {
    const [data, setData] = useState<{source: string, data: any} | null>(null)
    const [error, setError] = useState<string | null>(null)

    const handleCallServerAction = async () => {
        const result = await serverAction()
        console.log(result)
        if (result.success) {
            setData({source: "server-action", data: result.data})
            setError(null)
        }
        else {
            console.error(result.error)
            setError(result.error || "An unknown error occurred")
            setData(null)
        }
    }

    const handleCallApiRoute = async () => {
        const result = await fetch('/api/comments')
        const data = await result.json()
        console.log(data)
        if (data.success) {
            setData({source: "api-route", data: data.data})
            setError(null)
        } else {
            console.error(data.error)
            setError(data.error)
            setData(null)
        }
    }

  return (
    <div className="flex flex-col w-full gap-2">
    <section className="flex flex-row gap-2">
        <button onClick={handleCallServerAction} className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md">
            Call Server Action
        </button>
        <button onClick={handleCallApiRoute} className="cursor-pointer bg-amber-500 text-white px-4 py-2 rounded-md">
            Call API Route
        </button>

    </section>
    {data && 
    <div className="flex flex-col w-full gap-5 bg-slate-200 p-2 rounded-md max-h-[200px] overflow-y-auto">
       {data && data.source === "server-action" && data.data.map((item: any) => (
        <div key={item.id} className="flex flex-col w-full gap-1">
            <h3 className="text-sm text-black/80 font-bold">{item.title}</h3>
                <p className="text-sm text-black/80">{item.body}</p>
            </div>
        ))}
        {data && data.source === "api-route" && data.data.map((item: any) => (
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