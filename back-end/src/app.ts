import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes';
import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errorMiddleware);

export default app;
