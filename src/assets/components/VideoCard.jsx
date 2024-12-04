import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;

  return (
    <div className="m-2 h-80 w-72 shadow-lg p-2 hover:cursor-pointer hover:border ">
      <img
        className={`w-${thumbnails.medium.width} h-${thumbnails.medium.height} rounded`}
        src={thumbnails.medium.url}
        alt="thumnail"
      />
      <div className="flex flex-col">
        <h2 className="font-bold text-md">{title}</h2>
        <span>{channelTitle}</span>

        <div>
          <span>{statistics.viewCount} views</span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
