import EventItem from '@modules/v1/event/infra/typeorm/entities/EventItem';
import ICreateEventItemDTO from '@modules/v1/event/dtos/ICreateEventItemDTO';

export default interface EventRepository {
  findAll(event_id: string): Promise<EventItem[] | undefined>;
  create(data: ICreateEventItemDTO[]): Promise<EventItem[]>;
}
