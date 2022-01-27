import EventItem from '@modules/v1/event/infra/typeorm/entities/EventItem';
import IEventItemRepository from '@modules/v1/event/repositories/IEventItemRepository';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class PaidEventItemService {
  constructor(
    @inject('EventItemRepository')
    private eventItemRepository: IEventItemRepository,
  ) {}

  public async execute(id: string): Promise<EventItem | undefined> {
    const event = await this.eventItemRepository.findById(id);
    if (!event) {
      throw new AppError('Item não encontrado', 404);
    }


    event.paid = !event.paid;
    await this.eventItemRepository.save(event);
    return event;
  }
}

export default PaidEventItemService;
