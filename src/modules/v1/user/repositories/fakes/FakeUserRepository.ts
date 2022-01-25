import User from '@modules/v1/user/infra/typeorm/entities/User';
import IUserRepository from '@modules/v1/user/repositories/IUserRepository';
import { v4 } from 'uuid';

class FakeUserRepository implements IUserRepository {
  private users: User[] = [];

  public async findById(id: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.id === id);
    return findUser;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email);
    return findUser;
  }

  public async create(userData: any): Promise<User> {
    const user = new User();

    Object.assign(
      user,
      {
        id: v4(),
      },
      userData,
    );

    this.users.push(user);

    return user;
  }
}

export default FakeUserRepository;
