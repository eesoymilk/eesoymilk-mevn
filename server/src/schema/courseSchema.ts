import mongoose, { Schema } from "mongoose";

interface CourseInterface {
  _id: string,
  title: string,
  credits: number,
  time: string,
  room: string,
  instructor: string,

  gpa: string,
  rank: number,
  totalEnrollment: number,
}

const courseSchema = new Schema<CourseInterface>(
  {
    _id: { type: String, required: true },
    title: { type: String, required: true },
    credits: { type: Number, required: true },
    time: { type: String, required: true },
    room: { type: String, required: true },
    instructor: { type: String, required: true },

    gpa: { type: String, required: false },
    rank: { type: Number, required: false },
    totalEnrollment: { type: Number, required: false },
  },
  { _id: false },
);

export default mongoose.model("Course", courseSchema);
