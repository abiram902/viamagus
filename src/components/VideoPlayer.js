import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";

function VideoPlayer() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div className="video">
      {" "}
      <p>React - player</p>
      <div
        className="videoplayer"
        onMouseEnter={toggleVisibility}
        onMouseLeave={toggleVisibility}
      >
        <ReactPlayer url="https://youtu.be/fIYr8hbos_4" width="100%" />
        {isVisible && <div className="circle"> i </div>}
      </div>
    </div>
  );
}

export default VideoPlayer;
