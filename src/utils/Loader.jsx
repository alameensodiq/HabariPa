import React from "react";

export const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#2B4A9D]">
      <div className="w-20 h-20 border-4 border-white border-dashed rounded-full animate-spin"></div>
    </div>
  );
};
