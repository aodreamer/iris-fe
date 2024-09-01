import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPaperclip, FaMicrophone, FaPaperPlane } from "react-icons/fa";

const ChatGPT = ({ apiKey }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [attachment, setAttachment] = useState(null);

  const [fixPrompts, setFixPrompts] = useState(["Berapa total siswa di kabupaten bogor", "Berapa jumlah siswa mengulang di kabupaten bogor", "Sebutkan data lokasi, indeks prestasi, dan jumlah siswa di kabupaten bogor"]);

  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() === "" && !attachment) return;

    const newMessage = { role: "user", content: input, attachment };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput("");
    setAttachment(null);

    try {
      const response = await axios.post("http://127.0.0.1:5000/middleware", { prompt: input }, { headers: { "Content-Type": "application/json" } });

      const reply = response.data.output.text;
      setMessages([...updatedMessages, { role: "assistant", content: reply }]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFileChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  const handleSpeechToText = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "id-ID"; // Set language to Indonesian as priority
    recognition.start();

    recognition.onresult = (event) => {
      setInput(event.results[0][0].transcript);
    };

    recognition.onerror = (event) => {
      if (event.error === "no-speech" || event.error === "network") {
        // If there's an error with Indonesian, fallback to English
        recognition.lang = "en-US";
        recognition.start();
      } else {
        console.error("Speech recognition error:", event.error);
      }
    };

    recognition.onnomatch = () => {
      // If no matching speech is recognized in Indonesian, fallback to English
      recognition.lang = "en-US";
      recognition.start();
    };
  };

  const handleFixPromptClick = (prompt) => {
    setInput(prompt);
    // Use a timeout to ensure the state is updated before sending the message
    setTimeout(() => {
      handleSendMessage();
    }, 1);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg h-full p-4 flex flex-col">
      <div className="flex h-12 mb-5 bg-[#5ce1e6] text-center align-middle text-white justify-center text-3xl font-bold">ASK IRIS!</div>
      <div className="flex-grow overflow-y-auto mb-4 border p-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"}`}>
            <div className={`inline-block p-2 rounded ${msg.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>{msg.content}</div>
            {msg.attachment && <div className="text-sm text-gray-500">Attachment: {msg.attachment.name}</div>}
          </div>
        ))}
      </div>
      {/* Add the fix prompt buttons here */}
      <div className="flex flex-col space-y-2 mb-4">
        {fixPrompts.map((prompt, index) => (
          <button key={index} className="bg-blue-300 text-white p-2 rounded-lg shadow-lg hover:bg-blue-400 focus:outline-none" onClick={() => handleFixPromptClick(prompt)}>
            {prompt}
          </button>
        ))}
      </div>
      <div className="flex items-center">
        <button className="p-2 text-gray-500" onClick={() => document.getElementById("fileInput").click()}>
          <FaPaperclip />
        </button>
        <input id="fileInput" type="file" className="hidden" onChange={handleFileChange} />
        <input
          className="flex-grow p-2 border"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
        />
        <button className="p-2 text-gray-500" onClick={handleSpeechToText}>
          <FaMicrophone />
        </button>
        <button className="bg-blue-500 text-white p-2 rounded-r-lg" onClick={handleSendMessage}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatGPT;
