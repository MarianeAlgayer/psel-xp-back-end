import sharesModel from '../models/shares.model';

import { IShare } from '../@types/interfaces.d';

const getAllShares = async (): Promise<IShare[]> => {
  const shares = await sharesModel.getAllShares();

  return shares.map((share) => ({
    ...share,
    value: Number(share.value),
  }));
};

export default {
  getAllShares,
};
