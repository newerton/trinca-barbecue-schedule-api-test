import CreateEventService from '@modules/v1/event/services/CreateEventService';
import ViewEventService from '@modules/v1/event/services/ViewEventService';
import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class EventController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { date, title, description, items } = request.body;

    const model = container.resolve(CreateEventService);
    const event = await model.execute({
      date,
      title,
      description,
      items,
    });

    return response.json(instanceToPlain(event));
  }

  public async view(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const view = container.resolve(ViewEventService);
    const event = await view.execute(id);
    return response.json(instanceToPlain(event));
  }
}
