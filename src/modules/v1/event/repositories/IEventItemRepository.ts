import EventItem from '@modules/v1/event/infra/typeorm/entities/EventItem';
import ICreateEventItemDTO from '@modules/v1/event/dtos/ICreateEventItemDTO';

export default interface EventItemRepository {
  findById(id: string): Promise<EventItem | undefined>;
  findAll(event_id: string): Promise<EventItem[] | undefined>;
  create(data: ICreateEventItemDTO): Promise<EventItem>;
  save(data: EventItem): Promise<EventItem>;
}
