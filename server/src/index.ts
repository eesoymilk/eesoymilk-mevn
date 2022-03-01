import express from "express";
import type { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import blog from "./routes/api/blog";
import course from "./routes/api/course";
import mongoose from "mongoose";

// // auth0
// import * as dotenv from "dotenv";
// import helmet from "helmet";
// import nocache from "nocache";
// import { messagesRouter } from "./messages/messages.router";
// import { errorHandler } from "./middleware/error.middleware";
// import { notFoundHandler } from "./middleware/not-found.middleware";

// dotenv.config();

// if (!(process.env.PORT && process.env.CLIENT_ORIGIN_URL)) {
// 	throw new Error(
// 	  "Missing required environment variables. Check docs for more info."
// 	);
// }
  
// const PORT: number = parseInt(process.env.PORT as string, 10);
// const CLIENT_ORIGIN_URL = process.env.CLIENT_ORIGIN_URL;
// // auth0 end

const app: Application = express();
// // auth0
// const apiRouter = express.Router();


app.use(bodyParser.json());
app.use(cors());
app.use("/api/blog", blog);
app.use("/api/course", course);

mongoose.connect(
	"mongodb+srv://qiyoudaoyi:2Haao6SKRgwFk4c6@eesoymilk.hnyyl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

app.listen(5000, () => console.log("server started."));