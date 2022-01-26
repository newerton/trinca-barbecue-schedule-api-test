import EventItem from '@modules/v1/event/infra/typeorm/entities/EventItem';
import IEventItemRepository from '@modules/v1/event/repositories/IEventItemRepository';
import { v4 } from 'uuid';

class FakeEventItemRepository implements IEventItemRepository {
  private items: EventItem[] = [];

  public async findAll(event_id: string): Promise<EventItem[] | undefined> {
    const findEventItem = this.items.filter(event => event.event_id === event_id);
    return findEventItem;
  }

  public async create(eventData: any): Promise<EventItem[]> {
    const event = new EventItem();

    Object.assign(
      event,
      {
        id: v4(),
      },
      eventData,
    );

    this.items.push(event);

    return this.items;
  }
}

export default FakeEventItemRepository;
