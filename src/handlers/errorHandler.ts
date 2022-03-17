import { Request, Response } from "express";

export function unCoughtErrorHandler(err: any, res: Response) {
  res.end({ error: err });
}
/**
 * @method apiErrorHandler
 * @param err: any, req: Request, res: Response, message: string
 * @desc used to handle api error messages
 */
export function apiErrorHandler(
  err: any,
  req: Request,
  res: Response,
  message: string
) {
  const error: object = { Message: message, Request: req, Stack: err };
  res.json({ Message: message });
}
