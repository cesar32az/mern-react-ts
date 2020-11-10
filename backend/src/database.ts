import { connect, ConnectionOptions } from "mongoose";
import config from "./config";

const uri: string = `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`;
const options: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  authSource: "admin",
  user: config.MONGO_USER,
  pass: config.MONGO_PASSWORD,
};

(async () => {
  try {
    await connect(uri, options);
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
})();
