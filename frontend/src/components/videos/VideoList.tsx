import React, { Fragment, useEffect, useState } from "react";
import { Video } from "./video";
import { getVideos } from "../../services/VideoService";
import { VideoItem } from "./VideoItem";

export const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const loadVideos = async () => {
    const res = await getVideos();
    setVideos(res.data);
  };
  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <Fragment>
        <h1>Video list</h1>
      <div>
        {videos.map((video) => {
          return <VideoItem video={video} />
        })}
      </div>
    </Fragment>
  );
};
