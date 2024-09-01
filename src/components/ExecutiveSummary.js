import React from "react";
import { FaDownload } from "react-icons/fa";

const ExecutiveSummary = () => {
  const handleDownload = () => {
    window.location.href = "/IRIS Executive Report.pdf"; // Path ke file di folder public
  };

  return (
    <div className="fixed bottom-5 left-5">
      <button onClick={handleDownload} className="flex items-center bg-orange-500 text-white rounded-full p-4 shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600">
        <FaDownload className="h-8 w-8 m-2" />
        <span className="mr-2">Export Executive Summary</span>
      </button>
    </div>
  );
};

export default ExecutiveSummary;
