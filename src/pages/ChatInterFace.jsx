import React, { useState } from "react";
import "../styles/ChatInterFace.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import axios from "axios";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";

const ChatInterFace = () => {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState(false);
  const [tempChatHistory, setChatHistory] = useState([]);
  const [auth, setAuth] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (prompt.trim() === "") return;
    // Simulate GPT-like text generation
    setOutput(true);
    try {
      const payload = {
        userId: auth?.user._id,
        prompt,
      };
      //api call
      axios.post(
        "https://project-wsb.vercel.app/api/v1/chatbot",
        payload
      ).then((result) => {
          if (result.status === 200) {
            setChatHistory([...tempChatHistory, { prompt, output:result.data.output }]);
          } else {
            toast.error("Can't generate response");
          }
        })
        .catch((error) => {
          toast.error(error);
        })
        .finally(() => {
          setOutput(false);
        });
      } catch (e) {
        console.log(e);
        toast.error("Something went wrong API call");
        setOutput(false);
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

        {tempChatHistory.length ? (
          <div className="gpt-output-area">
            {tempChatHistory.map((item, index) => (
              <div key={index} className="container-div">
                <pre className="prompt-style">{item.prompt}</pre>
                <pre className="output-style">{item.output}</pre>
              </div>
            ))}
            
            {output?<span className="output-style">Thinking ...</span>:""}
            
          </div>
        ) : (
          "Waiting for your prompt"
        )}
        <form className="gpt-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="gpt-input"
            placeholder="Type your prompt here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button type="submit" disabled={output} className="gpt-btn">
            Send
          </button>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ChatInterFace;
