import Event from '@modules/v1/event/infra/typeorm/entities/Event';
import IEventRepository from '@modules/v1/event/repositories/IEventRepository';
import IEventItemRepository from '@modules/v1/event/repositories/IEventItemRepository';
import { injectable, inject } from 'tsyringe';

interface IRequest {
  date: string;
  title: string;
  description: string;
  items: Array<{
    name: string;
    amount: number;
    has_beer?: boolean;
  }>;
}

@injectable()
class CreateEventService {
  constructor(
    @inject('EventRepository')
    private eventRepository: IEventRepository,

    @inject('EventItemRepository')
    private eventItemRepository: IEventItemRepository,
  ) {}

  public async execute({
    date,
    title,
    description,
    items,
  }: IRequest): Promise<Event | undefined> {
    const createEvent = await this.eventRepository.create({
      date,
      title,
      description,
    });

    const newItems = items.map(item => {
      return {
        event_id: createEvent.id,
        paid: false,
        ...item,
      };
    });
    await this.eventItemRepository.create(newItems);

    const event = await this.eventRepository.findById(createEvent.id);

    return event;
  }
}

export default CreateEventService;
