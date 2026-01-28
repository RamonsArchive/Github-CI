"use server";
import React from "react";
import { Suspense } from "react";
import DynamicMessage from "../../components/DynamicMessage";

const CacheExamplePage = async () => {
  const mathOperation = 5 * 6 - 5;

  return (
    <main className="flex min-h-screen w-full font-sans bg-slate-950">
      <div className="flex flex-col gap-10 h-screen w-full p-20">
        <div className="flex flex-col w-full gap-3 max-w-3xl ">
          <h1 className="text-4xl font-bold">Pre rendered Example</h1>
        </div>

        <div className="flex flex-col w-full gap-3">
          <h3 className="text-lg font-bold">
            Math Operation (Pre-rendered): {mathOperation}
          </h3>
          <Suspense
            fallback={
              <div className="flex flex-col w-full gap-3">
                <h3 className="text-lg font-bold p-2 rounded-xl bg-slate-800 border border-slate-500">
                  Loading...
                </h3>
              </div>
            }
          >
            <DynamicMessage />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default CacheExamplePage;
