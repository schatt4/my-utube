import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex p-2 shadow-md rounded-md">
      <img
        className="h-9 cursor-pointer"
        src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
        alt="user"
      />
      <span className="mx-2 font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
