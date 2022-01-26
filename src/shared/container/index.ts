import EventRepository from '@modules/v1/event/infra/typeorm/repositories/EventRepository';
import IEventRepository from '@modules/v1/event/repositories/IEventRepository';
import EventItemRepository from '@modules/v1/event/infra/typeorm/repositories/EventItemRepository';
import IEventItemRepository from '@modules/v1/event/repositories/IEventItemRepository';
import UserRepository from '@modules/v1/user/infra/typeorm/repositories/UserRepository';
import IUserRepository from '@modules/v1/user/repositories/IUserRepository';
import { container } from 'tsyringe';

import '@modules/v1/user/providers';

container.registerSingleton<IEventRepository>(
  'EventRepository',
  EventRepository,
);

container.registerSingleton<IEventItemRepository>(
  'EventItemRepository',
  EventItemRepository,
);


container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
