import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import axios from "axios";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import "../styles/AiAssistant.css"
const AiAssistant2 = () => {
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
      axios
        .post("https://project-wsb.vercel.app/api/v1/chatbot", payload)
        .then((result) => {
          if (result.status === 200) {
            setChatHistory([
              ...tempChatHistory,
              { prompt, output: result.data.output },
            ]);
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
      <div className="main-c" >
        <span >
          <h1 >ShieldHer Chatbot </h1>
          <span>Ask me anything?</span>
        </span>

        {tempChatHistory.length ? (
          <div>
            {tempChatHistory.map((item, index) => (
              <div key={index} >
                <pre >{item.prompt}</pre>
                <pre >{item.output}</pre>
              </div>
            ))}

            {output ? <span >Thinking ...</span> : ""}
          </div>
        ) : (
          "Waiting for your prompt"
        )}
        <form  onSubmit={handleSubmit}>
          <input
            type="text"
            
            placeholder="Type your prompt here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button type="submit" disabled={output}>
            Send
          </button>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AiAssistant2;
