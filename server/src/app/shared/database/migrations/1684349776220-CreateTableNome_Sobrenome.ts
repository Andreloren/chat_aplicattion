import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableNome_Sobrenome1684349776220
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "nome_sobrenome",
        columns: [
          { name: "uid", type: "uuid", isPrimary: true, isNullable: false },
          {
            name: "name",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "cpf",
            type: "char",
            length: "11",
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
          { name: "created_at", type: "timestamp", isNullable: false },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("nome_sobrenome", true, true, true);
  }
}
