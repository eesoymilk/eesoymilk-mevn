import type { Types } from "mongoose";

export default interface Blog {
  title: string;
  body: string;
  tags: string[];
  _id?: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}
