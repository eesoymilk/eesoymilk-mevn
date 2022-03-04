import mongoose, { Schema } from "mongoose";

interface Course {
  // _id: string,
  semester: number, // eg, 11001
  courseNo: string, // eg, EECS200101
  title: string,
  credits: number,
  time: string,
  room: string,
  instructor: string,

  gpa: string,
  rank: number,
  totalEnrollment: number,
}

const courseSchema = new Schema<Course>(
  {
    // _id: { type: String, required: true },
    semester: { type: Number, required: true },
    courseNo: { type: String, required: true },
    title: { type: String, required: true },
    credits: { type: Number, required: true },
    time: { type: String, required: true },
    room: { type: String, required: true },
    instructor: { type: String, required: true },

    gpa: { type: String, required: false },
    rank: { type: Number, required: false },
    totalEnrollment: { type: Number, required: false },
  },
  // { _id: false },
);

courseSchema.index({semester: 1, courseNo: -1}, { unique: true })

export default mongoose.model("Course", courseSchema);
