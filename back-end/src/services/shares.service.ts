import sharesModel from '../models/shares.model';

import { IShare } from '../@types/interfaces.d';

const getAllShares = (): Promise<IShare[]> => sharesModel.getAllShares();

export default {
  getAllShares,
};
