import { MigrationInterface, QueryRunner } from 'typeorm';
import { v4 } from 'uuid';
import { hash } from 'bcryptjs';

const users = [
  {
    id: v4(),
    name: 'Test',
    email: 'test@barbecue.io',
    password: 'abc123',
  },
];

export class Users1643080892110 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      users.map(async user => {
        user.password = await hash(user.password, 8);
        return await queryRunner.query(
          `INSERT INTO user (id, name, email, password) VALUES ('${user.id}', '${user.name}', '${user.email}', '${user.password}')`,
        );
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      users.map(user =>
        queryRunner.query(`DELETE FROM user WHERE email='${user.email}';`),
      ),
    );
  }
}
