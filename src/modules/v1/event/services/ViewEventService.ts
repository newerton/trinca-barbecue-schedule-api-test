import Event from '@modules/v1/event/infra/typeorm/entities/Event';
import IEventRepository from '@modules/v1/event/repositories/IEventRepository';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class ViewEventService {
  constructor(
    @inject('EventRepository')
    private eventRepository: IEventRepository,
  ) {}

  public async execute(id: string): Promise<Event | undefined> {
    const event = await this.eventRepository.findById(id);
    if (!event) {
      throw new AppError('Evento não encontrado', 404);
    }
    return event;
  }
}

export default ViewEventService;
