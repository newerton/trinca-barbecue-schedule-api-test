import authConfig from '@config/auth';
import User from '@modules/v1/user/infra/typeorm/entities/User';
import IHashProvider from '@modules/v1/user/providers/HashProviders/models/IHashProvider';
import IUserRepository from '@modules/v1/user/repositories/IUserRepository';
import AppError from '@shared/errors/AppError';
import { sign } from 'jsonwebtoken';
import { injectable, inject } from 'tsyringe';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    email,
    password,
  }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('E-mail e/ou senha inválidos.', 404);
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatched) {
      throw new AppError('E-mail e/ou senha inválidos', 404);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return { user, token };
  }
}

export default AuthenticateUserService;
