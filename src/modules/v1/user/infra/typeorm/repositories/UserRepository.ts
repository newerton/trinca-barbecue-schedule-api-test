import User from '@modules/v1/user/infra/typeorm/entities/User';
import IUserRepository from '@modules/v1/user/repositories/IUserRepository';
import { getRepository, Repository } from 'typeorm';

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);
    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });
    return user;
  }
}

export default UserRepository;
