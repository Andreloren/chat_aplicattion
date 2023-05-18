import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "users" })
export class UserLoggedEntity {
  @PrimaryColumn({ name: "logged_id" })
  userLoggedId!: string;

  @Column()
  public name!: string;

  @Column()
  public cpf!: string;

  @Column()
  public username!: string;

  @Column()
  public password!: string;
}
