import express from "express";
import type { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import blog from "./routes/api/blog";
import course from "./routes/api/course";
import mongoose from "mongoose";

const app: Application = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api/blog", blog);
app.use("/api/course", course);

mongoose.connect(
	"mongodb+srv://qiyoudaoyi:2Haao6SKRgwFk4c6@eesoymilk.hnyyl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

app.listen(5000, () => console.log("server started."));