import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const keyValue = (videoId) => {
    return videoId ? videoId : "1";
  };
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={keyValue(video.id.videoId)}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className='ui relaxed divided list'>{renderedList}</div>;
};

export default VideoList;
