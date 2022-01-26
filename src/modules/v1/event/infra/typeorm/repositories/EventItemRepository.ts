import ICreateEventItemDTO from '@modules/v1/event/dtos/ICreateEventItemDTO';
import EventItem from '@modules/v1/event/infra/typeorm/entities/EventItem';
import IEventItemRepository from '@modules/v1/event/repositories/IEventItemRepository';
import { getRepository, Repository } from 'typeorm';

class EventItemRepository implements IEventItemRepository {
  private ormRepository: Repository<EventItem>;

  constructor() {
    this.ormRepository = getRepository(EventItem);
  }

  public async findAll(event_id: string): Promise<EventItem[] | undefined> {
    const events = await this.ormRepository.find({ event_id });
    return events;
  }

  public async create(data: ICreateEventItemDTO[]): Promise<EventItem[]> {
    const event = this.ormRepository.create(data);
    await this.ormRepository.save(event);
    return event;
  }
}

export default EventItemRepository;
