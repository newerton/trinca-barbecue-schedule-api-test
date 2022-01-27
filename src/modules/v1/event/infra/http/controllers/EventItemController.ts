import PaidEventItemService from '@modules/v1/event/services/PaidEventItemService';
import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class EventItemController {
  public async paid(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const update = container.resolve(PaidEventItemService);
    const event = await update.execute(id);
    return response.json(instanceToPlain(event, { groups: ['update'] }));
  }
}
