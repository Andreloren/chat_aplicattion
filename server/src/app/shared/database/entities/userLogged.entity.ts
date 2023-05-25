import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "users" })
export class UserLoggedEntity {
  @Column({ name: "logged_id" })
  userLoggedId!: string;

  @Column()
  public name!: string;

  @PrimaryColumn()
  public cpf!: string;

  @Column()
  public username!: string;

  @Column()
  public password!: string;
}
