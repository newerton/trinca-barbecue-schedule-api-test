import userRouter from '@modules/v1/user/infra/http/routes/user.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/users', userRouter);

export default routes;
