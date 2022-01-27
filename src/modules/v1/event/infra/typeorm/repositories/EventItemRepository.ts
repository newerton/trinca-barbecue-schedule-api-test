import ICreateEventItemDTO from '@modules/v1/event/dtos/ICreateEventItemDTO';
import EventItem from '@modules/v1/event/infra/typeorm/entities/EventItem';
import IEventItemRepository from '@modules/v1/event/repositories/IEventItemRepository';
import { getRepository, Repository } from 'typeorm';

class EventItemRepository implements IEventItemRepository {
  private ormRepository: Repository<EventItem>;

  constructor() {
    this.ormRepository = getRepository(EventItem);
  }

  public async findById(id: string): Promise<EventItem | undefined> {
    const event = await this.ormRepository.findOne(id);
    return event;
  }

  public async findAll(event_id: string): Promise<EventItem[] | undefined> {
    const events = await this.ormRepository.find({ event_id });
    return events;
  }

  public async create(data: ICreateEventItemDTO): Promise<EventItem> {
    const event = this.ormRepository.create(data);
    await this.ormRepository.save(event);
    return event;
  }

  public async save(data: EventItem): Promise<EventItem> {
    return this.ormRepository.save(data);
  }
}

export default EventItemRepository;
