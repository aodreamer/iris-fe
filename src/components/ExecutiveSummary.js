import React, { useState } from "react";

const ExecutiveSummary = () => {
  return (
    <div className="fixed bottom-5 left-5">
      <button onClick={""} className="flex items-center bg-orange-500 text-white rounded-full p-4 shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600">
        <img src="/images/iris.png" alt="IRIS Icon" className="w-10 h-10 rounded-xl" />
        <span className="mr-2">Export Executive Summary</span>
      </button>
    </div>
  );
};

export default ExecutiveSummary;
