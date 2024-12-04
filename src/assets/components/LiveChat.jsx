import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../store/chatSlice";
import { generateRandomTxt, randomNameGenerate } from "../../utils/helper";

const LiveChat = () => {
  const [liveChatMsg, setLiveChatMsg] = useState("");
  const dispatch = useDispatch();

  const messages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    //API call
    //API Polling
    const timer = setInterval(() => {
      dispatch(
        addChat({
          name: randomNameGenerate(),
          message: generateRandomTxt(20),
        })
      );
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  });

  const handleChatSubmit = (evt) => {
    evt.preventDefault();

    dispatch(
      addChat({
        name: "Srijani",
        message: liveChatMsg,
      })
    );
    setLiveChatMsg("");
  };

  return (
    <>
      <div className="w-[450px] h-[600px] ml-7 p-2 border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {messages.map((c, idx) => (
          <ChatMessage key={idx} name={c.name} message={c.message} />
        ))}
      </div>

      <form className="w-full border border-black" onSubmit={handleChatSubmit}>
        <input
          value={liveChatMsg}
          className="p-2 rounded-md border border-slate-700 w-96"
          type="text"
          onChange={(e) => setLiveChatMsg(e.target.value)}
        />
        <button className="bg-green-500 px-2 py-1 ml-4 rounded-md">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
