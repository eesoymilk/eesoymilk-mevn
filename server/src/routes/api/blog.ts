import mongoose from "mongoose";
import { Router } from "express";
import type { Request, Response } from "express";
import { checkJwt } from "../../middleware/check-jwt.middleware";
import Blog from "../../models/blog";

const router: Router = Router();

// Get Blogs
router.get("/", async (req: Request, res: Response) => {
  const blogs = await Blog.find();
  res.send(blogs);
});

router.get("/:id", async (req: Request, res: Response) => {
  console.log("blog page running.");
  const blog = await Blog.findById(req.params.id);
  res.send(blog);
});

// Delete Blog
router.delete("/:id", async (req: Request, res: Response) => {
  const _id = new mongoose.Types.ObjectId(req.params.id)
  const deleted_res = await Blog.remove({ _id });
  console.log(`${deleted_res.deletedCount} post(s) deleted.`);
  res.status(200).send();
});

// Add Blog
router.post("/", checkJwt, async (req: Request, res: Response) => {
  console.log("adding new blog.");
  const newBlog = new Blog({ title: req.body.title, body: req.body.body, tags: req.body.tags });
  await newBlog.save();
  console.log(newBlog);
  res.status(201).send();
});

export default router;
