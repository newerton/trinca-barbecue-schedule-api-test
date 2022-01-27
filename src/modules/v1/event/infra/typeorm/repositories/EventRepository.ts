import ICreateEventDTO from '@modules/v1/event/dtos/ICreateEventDTO';
import Event from '@modules/v1/event/infra/typeorm/entities/Event';
import IEventRepository from '@modules/v1/event/repositories/IEventRepository';
import { getRepository, Repository } from 'typeorm';

class EventRepository implements IEventRepository {
  private ormRepository: Repository<Event>;

  constructor() {
    this.ormRepository = getRepository(Event);
  }

  public async findById(id: string): Promise<Event | undefined> {
    const event = await this.ormRepository.findOne(id);
    return event;
  }

  public async findAll(): Promise<Event[]> {
    const where = 'DATE(date) >= DATE(CURRENT_TIMESTAMP)';
    const event = await this.ormRepository.find({
      where,
      order: { date: 'ASC' },
    });
    return event;
  }

  public async create(eventData: ICreateEventDTO): Promise<Event> {
    const event = this.ormRepository.create(eventData);
    await this.ormRepository.save(event);
    return event;
  }
}

export default EventRepository;
