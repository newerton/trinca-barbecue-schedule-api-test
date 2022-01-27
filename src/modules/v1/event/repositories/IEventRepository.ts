import Event from '@modules/v1/event/infra/typeorm/entities/Event';
import ICreateEventDTO from '@modules/v1/event/dtos/ICreateEventDTO';
import EventItem from '../infra/typeorm/entities/EventItem';

export default interface EventRepository {
  findById(id: string): Promise<Event | undefined>;
  findAll(): Promise<Event[]>;
  create(data: ICreateEventDTO): Promise<Event>;
}
