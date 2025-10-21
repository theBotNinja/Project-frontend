import React, { cache, useState } from "react";
import "../styles/ChatInterFace.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import axios from "axios";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";

const ChatInterFace = () => {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [auth, setAuth] = useAuth(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (prompt.trim() === "") return;
    // Simulate GPT-like text generation
    setOutput("Thinking...");
    const payload = {
      userId: auth?.user._id,
      prompt,
    };
    //api call
    try {
      const chatBotRes = await axios.post(
        "https://project-wsb.vercel.app/api/v1/chatbot",
        payload
      );
      if (chatBotRes.status === 200) {
        setOutput(chatBotRes.output);
      } else {
        setOutput("Error");
        toast.error("Can't generate response");
      }
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong API call");
    }
    setPrompt("");
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="gpt-container">
        <span className="contain">
          <h1 className="gpt-title">ShieldHer Chatbot </h1>
          <h6>Ask me anything?</h6>
        </span>

        <div className="gpt-output-area">
          <pre className="gpt-output">
            {output || "Waiting for your prompt..."}
          </pre>
        </div>

        <form className="gpt-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="gpt-input"
            placeholder="Type your prompt here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button type="submit" className="gpt-btn">
            Send
          </button>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ChatInterFace;
