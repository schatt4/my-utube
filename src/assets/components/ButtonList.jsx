import React from "react";
import Button from "./Button";

const btnList = ["All", "Music", "Interview", "Gaming", "Coding"];

const ButtonList = () => {
  return (
    <div className="flex">
      {btnList.map((bTxt, idx) => (
        <Button key={idx} btnTxt={bTxt} />
      ))}
    </div>
  );
};

export default ButtonList;
