import mongoose from "mongoose";
import express, { Router } from "express";
import type { Request, Response } from "express";
import Course from "../../models/course";
import { checkJwt, guard } from "../../middleware/check-jwt.middleware";

const router: Router = Router();

// Get Courses
router.get("/", checkJwt, guard.check(["read:courses"]), async (req: Request, res: Response) => {
  const allCourses = await Course.find().sort({ _id: "asc", time: "asc" });
  res.send(allCourses);
});

router.get("/:id", checkJwt, guard.check(["read:courses"]), async (req: Request, res: Response) => {
  res.send(await Course.findById(req.params.id));
});

// Delete Course
router.delete("/:id", checkJwt, guard.check(["write:courses"]), async (req: Request, res: Response) => {
  if (await Course.findByIdAndDelete(req.params.id)) console.log("Post deleted.");
  res.status(200).send();
});

// Add Course
router.post("/", checkJwt, guard.check(["write:courses"]), async (req: Request, res: Response) => {
  console.log("adding new course.");
  const newCourse = new Course(req.body);
  await newCourse.save();
  console.log(newCourse);
  res.status(201).send();
});

export default router;
