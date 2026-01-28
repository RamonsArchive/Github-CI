import React from "react";

const page = () => {
  return (
    <main className="flex min-h-screen w-full font-sans bg-slate-950">
      <div className="flex flex-col w-full gap-3 max-w-3xl mx-auto py-10 md:py-20 px-5 sm:px-20">
        <div className="w-full max-w-3xl flex items-start justify-start">
          <div className="flex flex-row gap-2 items-center">
            <h3 className="text-md font-light text-zinc-500 italic">
              ColorStack @ UCSD
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
