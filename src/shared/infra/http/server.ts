import 'reflect-metadata';
import 'dotenv/config';

import AppError from '@shared/errors/AppError';
import { errors } from 'celebrate';
import compression from 'compression';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';

import 'express-async-errors';

import routesVersion1 from './routes/v1';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();
const port = parseInt(process.env.PORT || '3333', 10);

app.use(cors());
app.use(express.json());

app.use(compression());
app.use(helmet());
app.use('/v1', routesVersion1);
app.use('/api/v1', routesVersion1);

app.use(errors());

app.use(
  (err: Error, _request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    console.dir(err, { depth: 8 });
    return response.status(500).json({
      status: 'server error',
      message: 'Internal server error',
    });
  },
);

app.listen(port, () =>
  console.log(`[NodeJS] Server is running on port ${port}`),
);
