import React, { useState, useEffect } from "react";
import axios from "axios";

const ChatGPT = ({ apiKey }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Load messages from localStorage when component mounts
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const newMessage = { role: "user", content: input };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput("");

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/middleware",
        {
          prompt: input, // Mengirim prompt secara langsung
        },
        {
          headers: {
            "Content-Type": "application/json", // Hanya perlu Content-Type
          },
        }
      );

      const reply = response.data.output.text; // Mengambil teks dari respons
      setMessages([...updatedMessages, { role: "assistant", content: reply }]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg h-full p-4 flex flex-col">
      <div className="flex-grow overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"}`}>
            <div className={`inline-block p-2 rounded ${msg.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>{msg.content}</div>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          className="flex-grow p-2 border rounded-l-lg"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
        />
        <button className="bg-blue-500 text-white p-2 rounded-r-lg" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatGPT;
