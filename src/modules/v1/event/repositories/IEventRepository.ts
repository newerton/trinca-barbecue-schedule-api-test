import Event from '@modules/v1/event/infra/typeorm/entities/Event';
import ICreateEventDTO from '@modules/v1/event/dtos/ICreateEventDTO';

export default interface EventRepository {
  findById(id: string): Promise<Event | undefined>;
  create(data: ICreateEventDTO): Promise<Event>;
}
