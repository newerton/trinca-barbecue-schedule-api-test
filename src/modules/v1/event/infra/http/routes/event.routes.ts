import EventController from '@modules/v1/event/infra/http/controllers/EventController';
import EventItemController from '@modules/v1/event/infra/http/controllers/EventItemController';
import joiMessages from '@shared/infra/http/middlewares/joiMessages';
import { celebrate, Segments, Joi as JoiBase } from 'celebrate';
import { Router } from 'express';
import dateValidator from 'joi-date-dayjs';

const eventRouter = Router();
const eventController = new EventController();
const eventItemController = new EventItemController();

const Joi = JoiBase.extend(dateValidator);

eventRouter.get('/', eventController.store);

eventRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      date: Joi.date().required().label('Data do evento').messages(joiMessages),
      title: Joi.string().required().label('Descrição').messages(joiMessages),
      description: Joi.string()
        .allow(null, '')
        .label('Observação')
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

eventRouter.get(
  '/paid/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().guid({ version: 'uuidv4' }).required(),
    },
  }),
  eventItemController.paid,
);

export default eventRouter;
