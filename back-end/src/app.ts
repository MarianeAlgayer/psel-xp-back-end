import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerConfig from './docs/swagger.json';

import routes from './routes';
import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errorMiddleware);

export default app;
