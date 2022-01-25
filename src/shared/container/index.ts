import UserRepository from '@modules/v1/user/infra/typeorm/repositories/UserRepository';
import IUserRepository from '@modules/v1/user/repositories/IUserRepository';
import { container } from 'tsyringe';

import '@modules/v1/user/providers';

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepository,
);
