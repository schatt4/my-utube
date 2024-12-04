import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { closeSidebar } from "../store/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
const Watch = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);
  return (
    <div className="flex flex-col w-full ">
      <div className="p-4 flex">
        <iframe
          width="1000"
          height="600"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div>
          <LiveChat />
        </div>
      </div>

      <CommentsContainer />
    </div>
  );
};

export default Watch;
