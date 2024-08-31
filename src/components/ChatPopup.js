import React from "react";

const ChatPopup = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed bottom-0 right-0 m-5 ${isOpen ? "" : "hidden"}`}>
      <div className="w-80 bg-blue-900 text-white rounded-lg shadow-lg">
        <div className="bg-blue-700 p-3 rounded-t-lg flex justify-between items-center">
          <h3 className="text-lg">Hannah</h3>
          <button onClick={onClose} className="text-white">
            ✖️
          </button>
        </div>
        <div className="p-3">
          <div className="bg-white text-black p-2 rounded mb-2">
            <p>Hi there! I'm Hannah. How can I help you?</p>
          </div>
          <div className="bg-blue-500 p-2 rounded text-right mb-2">
            <p>Oh finally a human, wohoo!</p>
          </div>
        </div>
        <div className="p-3 bg-blue-700 rounded-b-lg">
          <input type="text" placeholder="Type a reply..." className="w-full p-2 rounded-lg text-black" />
        </div>
      </div>
    </div>
  );
};

export default ChatPopup;
