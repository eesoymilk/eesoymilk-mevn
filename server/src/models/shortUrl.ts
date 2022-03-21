import mongoose, { Schema } from "mongoose";
import shortid from "shortid";

const ExpireAfterSeconds = 3600;

interface ShortUrl {
  url: string;
  shortUrl: string;
  expireAt: Date;
}

const shortUrlSchema = new Schema<ShortUrl>({
  url: { type: String, required: true },
  shortUrl: { type: String, required: true, default: shortid.generate },
  expireAt: {
    type: Date,
    required: true,
    default: new Date(Date.now() + ExpireAfterSeconds * 1000),
  },
});

export default mongoose.model("ShortUrl", shortUrlSchema);
