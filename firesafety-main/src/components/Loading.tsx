// src/components/Loading.tsx
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin h-16 w-16 border-4 border-t-4 border-blue-600 border-solid rounded-full"></div>
    </div>
  );
};

export default Loading;
