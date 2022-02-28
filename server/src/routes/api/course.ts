import mongoose from "mongoose";
import express, { Router } from "express";
import type { Request, Response } from "express";
import Course from "../../schema/courseSchema";

const router: Router = express.Router();

// Get Courses
router.get("/", async (req: Request, res: Response) => {
  res.send(await Course.find());
});

router.get("/:id", async (req: Request, res: Response) => {
  res.send(await Course.findById(req.params.id));
});

// Delete Course
router.delete("/:id", async (req: Request, res: Response) => {
  if (await Course.findByIdAndDelete(req.params.id)) console.log("Post deleted.");
  res.status(200).send();
});

// Add Course
router.post("/", async (req: Request, res: Response) => {
  console.log("adding new course.");
  const newCourse = new Course(req.body);
  await newCourse.save();
  console.log(newCourse);
  res.status(201).send();
});

export default router;
