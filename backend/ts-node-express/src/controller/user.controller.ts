import { Request, Response } from 'express';

export const getuser = (req: Response, res: Response):void => {
  res.send("get all users");
};