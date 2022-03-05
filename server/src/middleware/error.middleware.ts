import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (
    error &&
    error.status &&
    error.status === 401 &&
    error.code &&
    error.code === "credentials_required"
  ) {
    res.status(error.status).json({ message: "Requires authentication" });
    return;
  }

  if (error && error.status && error.status === 401) {
    res.status(error.status).json({ message: "Bad credentials" });
    return;
  }

  const status = error.statusCode || error.code || 500;
  const message = error.message || "internal error";

  res.status(status).json({ message });
};
