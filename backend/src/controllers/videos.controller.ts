import { Response, RequestHandler } from "express";
import Video from "../models/Videos";

export const createVideo: RequestHandler = async (req, res): Promise<Response> => {
  try {
    const videoFound = await Video.findOne({ url: req.body.url });
    if (videoFound)
      return res.status(303).json({ message: "the url already exists" });

    const newVideo = new Video(req.body);
    const savedVideo = await newVideo.save();
    return res.json(savedVideo);
  } catch (error) {
    return res.json(error);
  }
};

export const getVideos: RequestHandler = async (req, res): Promise<Response> => {
  try {
    const videos = await Video.find();
    return res.json(videos);
  } catch (error) {
    return res.json(error);
  }
};

export const getVideo: RequestHandler = async (req, res): Promise<Response> => {
  const videoFound = await Video.findById(req.params.id);

  if (!videoFound) return res.status(204).json();

  return res.json(videoFound);
};

export const deleteVideo: RequestHandler = async (req, res): Promise<Response> => {
  const videoFound = await Video.findByIdAndDelete(req.params.id);

  if (!videoFound) return res.status(204).json();

  return res.status(204).json();
};

export const updateVideo: RequestHandler = async (
  req,
  res
): Promise<Response> => {
  const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!videoUpdated) return res.status(204).json();
  return res.json(videoUpdated);
};
