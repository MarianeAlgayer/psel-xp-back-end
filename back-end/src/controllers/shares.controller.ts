import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import sharesService from '../services/shares.service';

const getAllShares = async (_req: Request, res: Response): Promise<Response> => {
  const shares = await sharesService.getAllShares();

  return res.status(StatusCodes.OK).json(shares);
};

export default {
  getAllShares,
};
