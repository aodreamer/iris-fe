import React, { useState } from "react";

import BarGraph from "./components/BarGraph";
import IssueRanking from "./components/IssueRanking";
import RadarGraph from "./components/RadarGraph";
import MapJabar from "./components/MapJabar";
import Header from "./components/Header";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import ChatGPT from "./components/ChatGPT";
import ChatPopup from "./components/ChatPopup";
import WebView from "./components/WebView";
import ExecutiveSummary from "./components/ExecutiveSummary";
import { MapProvider } from "./contexts/MapContext"; // Import the context provider

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
      <div className="flex-none p-2 px-5 bg-slate-300 text-black">
        <Header />
      </div>
      <div className="flex-grow grid grid-cols-2 bg-slate-300">
        <div className="grid col-span-2 bg-slate-300">
          <MapProvider>
            <div className="grid grid-cols-2 grid-rows-2 gap-1 pt-1 px-5 pb-5 bg-slate-300 text-black">
              <div className="grid grid-rows-8 col-span-1 row-span-1 bg-white rounded-lg">
                <MapJabar />
              </div>
              <div className="grid grid-rows-8 col-span-1 row-span-1 bg-white rounded-lg">
                <WebView url="https://isa.ebdesk.com/" />
              </div>
              <div className="grid grid-rows-8 col-span-1 row-span-1 bg-white rounded-lg">
                <BarGraph />
              </div>
              <div className="grid grid-rows-8 col-span-1 row-span-1 bg-white rounded-lg">
                <IssueRanking />
              </div>
            </div>
          </MapProvider>
        </div>

        <div>
          <ExecutiveSummary />
          <ChatPopup />
        </div>
      </div>
    </div>
  );
}

export default App;
