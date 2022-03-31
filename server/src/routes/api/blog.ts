import mongoose from "mongoose";
import { Router } from "express";
import type { Request, Response } from "express";
import { checkJwt, guard } from "../../middleware/check-jwt.middleware";
import Blog from "../../models/blog";

const router: Router = Router();

// Get Blogs
router.get("/", async (req: Request, res: Response) => {
  const blogs = await Blog.find().sort("-createdAt");
  res.send(blogs);
});

router.get("/:id", async (req: Request, res: Response) => {
  console.log("blog page running.");
  const blog = await Blog.findById(req.params.id);
  res.send(blog);
});

// Delete Blog
router.delete(
  "/:id",
  checkJwt,
  guard.check(["write:blogs"]),
  async (req: Request, res: Response) => {
    const _id = new mongoose.Types.ObjectId(req.params.id);
    const deleted_res = await Blog.remove({ _id });
    console.log(`${deleted_res.deletedCount} post(s) deleted.`);
    res.status(200).send();
  }
);

// router.delete("", async (req: Request, res: Response) => {
//   const deleted_res = await Blog.remove({});
//   console.log(`${deleted_res.deletedCount} post(s) deleted.`);
//   res.status(200).send();
// });

// Add Blog
router.post(
  "/",
  checkJwt,
  guard.check(["write:blogs"]),
  async (req: Request, res: Response) => {
    console.log("adding new blog.");
    const newBlog = new Blog({
      title: req.body.title,
      body: req.body.body,
      tags: req.body.tags,
    });
    await newBlog.save();
    console.log(newBlog);
    res.status(201).send();
  }
);

// Update Blog
router.patch(
  "/:id",
  checkJwt,
  guard.check(["write:blogs"]),
  async (req: Request, res: Response) => {
    console.log("updating blog.");
    const updatedBlogDetails = {
      title: req.body.title,
      body: req.body.body,
      tags: req.body.tags,
    };
    const updatedBlogDoc = await Blog.findOneAndUpdate(
      { id: req.body.id },
      updatedBlogDetails,
      { new: true }
    );
    res.status(201).send();
  }
);

export default router;
