import { Router } from "express";
import type { Request, Response } from "express";
import ShortUrl from "../../models/shortUrl";

const router: Router = Router();

// Get all ShortUrls
router.get("/", async (req: Request, res: Response) => {
  const allShortUrls = await ShortUrl.find().sort({ _id: "asc", time: "asc" });
  res.send(allShortUrls);
});

// Redirect to original
router.get("/:shortUrl", async (req: Request, res: Response) => {
  const shortUrl = await ShortUrl.findOne({ shortUrl: req.params.shortUrl });
  if (shortUrl === null) return res.sendStatus(404);
  shortUrl.save();
  res.redirect(shortUrl.url);
});

// Delete ShortUrl
router.delete("/", async (req: Request, res: Response) => {
  console.log(req.body.id);
  if (await ShortUrl.findByIdAndDelete(req.body.id)) {
    console.log("url deleted.");
    res.sendStatus(200);
  }
  res.sendStatus(404);
});

// Add ShortUrl
router.post("/", async (req: Request, res: Response) => {
  console.log("adding new shortUrl...");
  const newShortUrl = new ShortUrl(req.body);
  await newShortUrl.save();
  console.log(newShortUrl);
  res.status(201).send();
});

export default router;
