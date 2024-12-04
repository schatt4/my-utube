import React from "react";

const Button = ({ btnTxt }) => {
  return (
    <div className="p-2">
      <button className=" border border-gray-500 rounded-lg px-4 py-1 bg-gray-200 hover:bg-gray-300">
        {btnTxt}
      </button>
    </div>
  );
};

export default Button;
