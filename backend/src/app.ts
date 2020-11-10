import express from "express";
import morgan from "morgan";
import cors from "cors";

//import routes

import videosRoutes from "./routes/videos.routes";

//settings
const app = express();
app.set("port", process.env.PORT || 4000);

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api", videosRoutes);
export default app;
