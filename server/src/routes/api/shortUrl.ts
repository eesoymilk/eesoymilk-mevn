import { Router } from "express";
import type { Request, Response } from "express";
import ShortUrl from "../../models/shortUrl";
import { SERVER_URL } from "../../app";
import shortUrl from "../../models/shortUrl";

const router: Router = Router();

// Get all ShortUrls
router.get("/", async (req: Request, res: Response) => {
  const allShortUrls = await ShortUrl.find().sort({ _id: "asc", time: "asc" });
  res.send(allShortUrls);
});

// Redirect to original
router.get("/:shortUrl", async (req: Request, res: Response) => {
  const shortUrl = await ShortUrl.findOne({ shortUrl: req.params.shortUrl });
  if (shortUrl === null || new Date() > shortUrl.expireAt) {
    res.sendStatus(404);
    await ShortUrl.findByIdAndDelete(shortUrl?.id);
    return;
  }
  res.redirect(shortUrl.url, 301);
});

// Delete ShortUrl
router.delete("/", async (req: Request, res: Response) => {
  console.log(req.body.id);
  if (await ShortUrl.findByIdAndDelete(req.body.id)) {
    console.log("url deleted.");
    res.sendStatus(200);
    return;
  }
  res.sendStatus(404);
});

// Add ShortUrl
router.post("/", async (req: Request, res: Response) => {
  console.log("adding new shortUrl...");
  if (await ShortUrl.exists({ url: req.body.url })) {
    console.log("url already exists...");
    res.sendStatus(403);
    return;
  }
  const newShortUrl = new ShortUrl(req.body);
  await newShortUrl.save();
  console.log(newShortUrl.shortUrl);
  res.status(201).send({
    id: newShortUrl._id,
    shortUrl: `${SERVER_URL}/api/shortUrl/${newShortUrl.shortUrl}`,
  });
});

export default router;
