import connection from './connection';

import { IShare } from '../@types/interfaces.d';

const getAllShares = async (): Promise<IShare[]> => {
  const [shares] = await connection.execute('SELECT * FROM shares');

  return shares as IShare[];
};

export default {
  getAllShares,
};
