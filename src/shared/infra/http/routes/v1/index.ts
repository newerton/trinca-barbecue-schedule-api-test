import eventRouter from '@modules/v1/event/infra/http/routes/event.routes';
import userRouter from '@modules/v1/user/infra/http/routes/user.routes';

import { Router } from 'express';

const routes = Router();

routes.use('/events', eventRouter);
routes.use('/users', userRouter);

export default routes;
