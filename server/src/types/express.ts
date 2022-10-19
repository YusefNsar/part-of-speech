import { Request, RequestHandler } from 'express';

export type AnyObject = Record<string, unknown>;
export type EmptyObject = Record<string, never>;

export type Handler<
  ReqBody = AnyObject,
  ResBody = AnyObject,
  ReqQuery = AnyObject,
> = RequestHandler<
  AnyObject,
  ResBody,
  ReqBody,
  ReqQuery,
  AnyObject
>;