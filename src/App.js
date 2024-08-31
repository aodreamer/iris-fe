import React, { useState } from "react";

import BarGraph from "./components/BarGraph";
import IssueRanking from "./components/IssueRanking";
import RadarGraph from "./components/RadarGraph";
import MapJabar from "./components/MapJabar";
import Header from "./components/Header";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import ChatGPT from "./components/ChatGPT";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatOpen = () => {
    setIsChatOpen(true);
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
  };

  const apiKey = "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"; // Ganti

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-none p-4 py-2 px-5 bg-white text-black">
        <Header />
      </div>
      <div className="flex-grow grid grid-cols-3">
        <div className="grid col-span-2">
          <div className="grid grid-cols-2 grid-rows-2 gap-1 pt-1 px-5 pb-5 bg-white text-black">
            <div className="grid grid-rows-8 col-span-1 row-span-1 bg-white rounded-lg">
              <MapJabar />
            </div>
            <div className="grid grid-rows-8 col-span-1 row-span-1 bg-white rounded-lg">
              <IssueRanking />
            </div>
            <div className="grid grid-rows-8 col-span-1 row-span-1 bg-white rounded-lg">
              <BarGraph />
            </div>
            <div className="grid grid-rows-8 col-span-1 row-span-1 bg-white rounded-lg">
              <RadarGraph />
            </div>
            {/* <div className="grid grid-rows-8 col-span-1 row-span-1 bg-white rounded-lg">
              <LineChart />
            </div> */}
            {/* <div className="grid grid-rows-8 col-span-1 row-span-1 bg-white rounded-lg">
              <PieChart />
            </div> */}
          </div>
        </div>
        <div className="grid col-span-1">
          <ChatGPT apiKey={apiKey} />
        </div>
      </div>
    </div>
  );
}

export default App;
