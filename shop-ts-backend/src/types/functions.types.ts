import { Request, Response, NextFunction } from 'express';

export type ICallbackFunction<
  RequestParams,
  ResponseBody,
  RequestBody,
  RequestQuery
> = (
  req: Request<RequestParams, ResponseBody, RequestBody, RequestQuery>,
  res: Response
) => Promise<any>;

export type ITryCatch = <
  RequestParams,
  ResponseBody,
  RequestBody,
  RequestQuery
>(
  controller: ICallbackFunction<
    RequestParams,
    ResponseBody,
    RequestBody,
    RequestQuery
  >
) => (
  req: Request<RequestParams, ResponseBody, RequestBody, RequestQuery>,
  res: Response,
  next: NextFunction
) => Promise<any>;

export type ITryCatchMiddleware = (
  controller: IMiddleware
) => (req: Request, res: Response, next: NextFunction) => Promise<any>;

export type IMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;
