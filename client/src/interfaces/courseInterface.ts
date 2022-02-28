export default interface Course {
  _id: string;
  title: string;
  credits: number;
  time: string;
  room: string;
  instructor: string;

  gpa?: string;
  rank?: number;
  totalEnrollment?: number;

  sweetness?: number;
  coolness?: number;
}
