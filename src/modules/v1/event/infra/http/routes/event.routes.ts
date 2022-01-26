import EventController from '@modules/v1/event/infra/http/controllers/EventController';
import joiMessages from '@shared/infra/http/middlewares/joiMessages';
import { celebrate, Segments, Joi as JoiBase } from 'celebrate';
import { Router } from 'express';
import { ErrorReport } from 'joi';
import dateValidator from 'joi-date-dayjs';

const eventRouter = Router();
const eventController = new EventController();

const Joi = JoiBase.extend(dateValidator);

eventRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      date: Joi.date()
        .format('DD/MM/YYYY')
        .required()
        .label('Data do evento')
        .messages(joiMessages),
      title: Joi.string()
        .required()
        .label('Título do evento')
        .messages(joiMessages),
      description: Joi.string()
        .required()
        .label('Descrição')
        .messages(joiMessages),
      items: Joi.array()
        .items({
          name: Joi.string()
            .required()
            .label('Nome do participante')
            .messages(joiMessages),
          amount: Joi.number()
            .positive()
            .min(1)
            .max(20000)
            .required()
            .label('Valor')
            .messages({
              ...joiMessages,
              ...{
                'number.min': 'O valor mínimo não pode ser menor que R$ 1,00',
                'number.max':
                  'O valor máximo não pode ser maior que R$ 20.000,00',
              },
            }),
          has_beer: Joi.boolean()
            .valid(true)
            .default(false)
            .messages(joiMessages),
        })
        .label('Participantes')
        .messages(joiMessages)
        .required(),
    },
  }),
  eventController.create,
);

eventRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().guid({ version: 'uuidv4' }).required(),
    },
  }),
  eventController.view,
);


export default eventRouter;
