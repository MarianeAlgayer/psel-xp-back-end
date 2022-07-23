import { Router } from 'express';

import sharesController from '../controllers/shares.controller';

const router = Router();

router.get('/', sharesController.getAllShares);

export default router;
