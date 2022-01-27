import Event from '@modules/v1/event/infra/typeorm/entities/Event';
import IEventRepository from '@modules/v1/event/repositories/IEventRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ViewEventService {
  constructor(
    @inject('EventRepository')
    private eventRepository: IEventRepository,
  ) {}

  public async execute(): Promise<Event[]> {
    const event = await this.eventRepository.findAll();
    return event;
  }
}

export default ViewEventService;
