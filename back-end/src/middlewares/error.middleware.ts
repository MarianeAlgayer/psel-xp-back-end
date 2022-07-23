import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import HttpException from '../helpers/http.exception';

const errorMiddleware = (err: HttpException, _req: Request, res: Response, _next: NextFunction) => {
  const { status, message } = err;

  return res.status(status || StatusCodes.INTERNAL_SERVER_ERROR).json({ message });
};

export default errorMiddleware;
