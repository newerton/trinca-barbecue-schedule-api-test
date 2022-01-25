import LoginController from '@modules/v1/user/infra/http/controllers/LoginController';
import { celebrate, Segments, Joi as JoiBase } from 'celebrate';
import { Router } from 'express';

const userRouter = Router();
const loginController = new LoginController();

const Joi = JoiBase;

userRouter.post(
  '/login',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required()
    },
  }),
  loginController.create,
);

export default userRouter;
