import React from "react";

const DynamicMessage = async () => {
  // "use cache";
  // cacheLife("seconds")

  const message = await new Promise<string>(
    (resolve) => setTimeout(() => resolve("Hello World"), 5000), // 5 second delay
  );

  return (
    <div className="flex flex-col w-full gap-3">
      <h3 className="text-md font-bold p-2 rounded-xl bg-slate-800 border border-slate-500">
        Message (Dynamically Rendered): {message}
      </h3>
    </div>
  );
};

export default DynamicMessage;
