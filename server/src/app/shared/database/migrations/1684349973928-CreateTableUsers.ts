import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUsers1684349973928 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "logged_id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "name",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "cpf",
            type: "char",
            length: "14",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "username",
            type: "varchar",
            length: "30",
            isNullable: false,
          },
          {
            name: "password",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users", true, true, true);
  }
}
