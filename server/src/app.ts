import express from "express";
import type { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import blog from "./routes/api/blog";
import course from "./routes/api/course";
import shortUrl from "./routes/api/shortUrl";
import mongoose from "mongoose";

import * as dotenv from "dotenv";
import helmet from "helmet";
import nocache from "nocache";
import { SecretManagerServiceClient } from "@google-cloud/secret-manager";

dotenv.config();

async function getDbPassword() {
  const secretName = `projects/${process.env.GOOGLE_PROJECT_ID}/secrets/mongoose-password/versions/latest`;
  const secretClient = new SecretManagerServiceClient();
  const [version] = await secretClient.accessSecretVersion({
    name: secretName,
  });
  // Extract the payload as a string.
  const payload = version.payload?.data?.toString();
  return payload;
}

export async function main() {
  const DB_PASSWORD = await getDbPassword();
  const DB = `mongodb+srv://qiyoudaoyi:${DB_PASSWORD}@eesoymilk.hnyyl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  await mongoose.connect(DB);
  return "succesfully connected to db.";
}

export function exitdb() {
  mongoose.connection.close();
}

const app: Application = express();

if (!(process.env.PORT && process.env.CLIENT_ORIGIN_URL)) {
  throw new Error(
    "Missing required environment variables. Check docs for more info."
  );
}

const NODE_ENV = app.get("env");
const PORT: number = parseInt(process.env.PORT as string, 10);
const CLIENT_ORIGIN_URL =
  NODE_ENV === "development"
    ? "http://localhost:4040"
    : process.env.CLIENT_ORIGIN_URL;

// Middlewares Hell...
app.use(express.json());
app.set("json spaces", 2);
app.use(
  helmet({
    hsts: {
      maxAge: 31536000,
    },
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "default-src": ["'none'"],
        "frame-ancestors": ["'none'"],
      },
    },
    frameguard: {
      action: "deny",
    },
  })
);
app.use((req, res, next) => {
  res.contentType("application/json; charset=utf-8");
  next();
});
app.use(nocache());
app.use(
  cors({
    origin: CLIENT_ORIGIN_URL,
    methods: ["GET", "POST", "UPDATE", "DELETE"],
    allowedHeaders: ["Authorization", "Content-Type"],
    maxAge: 86400,
  })
);
app.use("/api/blog", blog);
app.use("/api/course", course);
app.use("/api/shortUrl", shortUrl);

export default app;
