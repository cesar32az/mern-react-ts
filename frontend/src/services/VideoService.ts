import axios from "axios";
import { Video } from "../components/videos/video";

const API = "http://localhost:4000/api";
export const getVideos = async () => {
    return await axios.get(`${API}/videos`);
}
export const createvideo = async (video: Video) => {
    return await axios.post(`${API}/videos/`, video);
  };