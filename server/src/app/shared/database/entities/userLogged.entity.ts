import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({ name: "users" })
export class UserLoggedEntity {
  @PrimaryColumn({ name: "logged_id" })
  userLoggedId?: string;

  @Column()
  public name?: string;

  @Column()
  public cpf?: string;

  @Column()
  public username?: string;

  @Column()
  public password?: string;

  @OneToOne(() => UserEntity)
  @JoinColumn({ name: "logged_id", referencedColumnName: "uid" })
  LoggedEntity?: UserEntity;
}
