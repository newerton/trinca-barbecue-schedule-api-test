import User from '@modules/v1/user/infra/typeorm/entities/User';

export default interface UserRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
}
