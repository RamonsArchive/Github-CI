import React from 'react'
import Image from 'next/image'
import FetchDataButton from '@/src/components/FetchDataButton'

const FullStackPage = () => {
  return (
    <main className="flex min-h-screen w-full font-sans bg-slate-950">
      <div className="flex flex-col w-full gap-3 max-w-3xl mx-auto py-10 md:py-20 px-5 sm:px-20">
        <div className="w-full max-w-3xl flex items-start justify-start">
          <div className="flex flex-row gap-2 items-center">
            <div className="relative w-10 h-10 aspect-square">
              <Image
                src="/icon.png"
                alt="ColorStack Icon"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-md font-light text-zinc-500 italic">
              ColorStack @ UCSD
            </h3>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-3xl">
          <h1 className="text-4xl font-bold">Lesson 5: Full Stack Development</h1>
        </div>
       
        <div className="flex flex-row w-full gap-3">
          <FetchDataButton />
        </div>
      </div>
    </main>
  )
}

export default FullStackPage