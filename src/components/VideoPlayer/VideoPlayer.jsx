import React, { useRef } from "react";
import "./VideoPlayer.css";
import v1 from "../../assets/v1.mp4";
const VideoPlayer = ({ setBlay, blay }) => {
  const player = useRef();
  const playerbol = (e) => {
    if (e.target === player.current) {
      setBlay(false);
    }
  };
  return (
    <div
      className={`video-player ${blay ? "" : "hide"}`}
      ref={player}
      onClick={playerbol}
    >
      <video src={v1} autoPlay muted controls />
    </div>
  );
};

export default VideoPlayer;
