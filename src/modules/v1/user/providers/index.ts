import BCryptHashProvider from '@modules/v1/user/providers/HashProviders/implementations/BCryptHashProvider';
import IHashProvider from '@modules/v1/user/providers/HashProviders/models/IHashProvider';
import { container } from 'tsyringe';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
