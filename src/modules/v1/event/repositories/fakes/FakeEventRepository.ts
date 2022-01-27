import Event from '@modules/v1/event/infra/typeorm/entities/Event';
import IEventRepository from '@modules/v1/event/repositories/IEventRepository';
import { v4 } from 'uuid';

class FakeEventRepository implements IEventRepository {
  private events: Event[] = [];

  public async findById(id: string): Promise<Event | undefined> {
    const findEvent = this.events.find(event => event.id === id);
    return findEvent;
  }

  public async findAll(): Promise<Event[]> {
    return this.events;
  }

  public async create(eventData: any): Promise<Event> {
    const event = new Event();

    Object.assign(
      event,
      {
        id: v4(),
      },
      eventData,
    );

    this.events.push(event);

    return event;
  }
}

export default FakeEventRepository;
