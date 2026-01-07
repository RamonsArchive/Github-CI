"use client";
import React from "react";
import { useState } from "react";
import Ramon from "./Ramon";

const InputOutput = () => {
  const [message, setMessage] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);

  const handleSend = () => {
    console.log(message);
    if (message.length === 0) return;
    setHistory([...history, message]);
    setMessage("");
  };

  const handleClear = () => {
    console.log("Clearing history");
    setHistory([]);
    setMessage("");
  };

  return (
    <section className="flex flex-col w-full gap-5 overflow-y-auto">
      <div className="flex flex-col w-full max-h-[200px] min-h-[200px] h-full bg-slate-900 p-2 rounded-xl overflow-y-auto">
        {/* add numbered lines to the history */}
        {history.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center w-full gap-1 bg-slate-900 p-2 rounded-xl"
          >
            <span className="text-sm text-slate-100">{index + 1}.</span>
            <p className="text-sm text-slate-100">{item}</p>
          </div>
        ))}
      </div>
      <div className="flex w-full gap-2 bg-slate-900 p-2 rounded-xl">
        <input
          type="text"
          placeholder="Enter your message here"
          className="w-full p-2 bg-transparent border-none outline-none resize-none text-sm text-slate-100 focus:ring-0 focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && message.length > 0) {
              handleSend();
            }
          }}
        />
        <button
          onClick={handleSend}
          className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
        <button
          onClick={handleClear}
          className="cursor-pointer bg-amber-500 text-white px-4 py-2 rounded-md"
        >
          Clear
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <Ramon />
      </div>
    </section>
  );
};

export default InputOutput;
