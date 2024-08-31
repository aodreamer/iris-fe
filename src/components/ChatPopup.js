import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import ChatGPT from "./ChatGPT";

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const apiKey = "sk-e0e6719323ac4cd08ad209485df437d7"; //

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5">
      <button onClick={toggleChat} className="flex items-center bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600">
        <span className="mr-2">Ask IRIS</span>
        <img src="/images/iris.png" alt="IRIS Icon" className="w-10 h-10 rounded-xl" />
      </button>

      {/* Jangan unmount ChatGPT */}
      <div className={`absolute bottom-16 right-0 w-[33vw] h-[80vh] bg-white rounded-lg shadow-lg ${isOpen ? "block" : "hidden"}`}>
        <ChatGPT apiKey={apiKey} />
      </div>
    </div>
  );
};

export default ChatPopup;
