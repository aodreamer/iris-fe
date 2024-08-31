import React from "react";

const issues = [
  { id: 1, issue: "Common Issue" },
  { id: 2, issue: "Common Issue" },
  { id: 3, issue: "Common Issue" },
  { id: 4, issue: "Common Issue" },
  { id: 5, issue: "Common Issue" },
];

const IssueRanking = () => {
  return (
    <>
      <div className="h-full row-span-1 text-center text-xl font-bold text-iris-dark-grey bg-iris-grey content-center">ISSUE (TOP SD SISWA BANYAK MENGULANG DAN DAERAH PALING MINIM LITERASI)</div>
      <div className="row-span-7 rounded-lg p-2">
        <ul>
          {issues.map((item) => (
            <li key={item.id} className="flex justify-between items-center bg-gray-200 hover:bg-gray-300 hover:cursor-pointer p-4 rounded-lg mb-2 text-black">
              <div className="flex items-center">
                <span className="text-xl font-bold mr-2">#{item.id}</span>
                <span>{item.issue}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default IssueRanking;
