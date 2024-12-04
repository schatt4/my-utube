import React, { useEffect, useState } from "react";

import VideoCard from "./VideoCard";
import { YOUTUBE_POPULAR_VDO_API } from "../../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setVideo] = useState();
  const getPopularVdo = async () => {
    const data = await fetch(YOUTUBE_POPULAR_VDO_API);
    const json = await data.json();
    setVideo(json.items);
  };
  useEffect(() => {
    getPopularVdo();
  }, []);

  if (!video) return null;
  return (
    <div className="flex flex-wrap ">
      {video.map((vd) => (
        <Link key={vd.id} to={"/watch?v=" + vd.id}>
          <VideoCard info={vd} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
