import { Router } from 'express';

import sharesRoutes from './shares.routes';

const router = Router();

router.use('/ativos', sharesRoutes);

export default router;
