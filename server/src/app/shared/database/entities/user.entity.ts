import { randomUUID } from "crypto";
import { BeforeInsert, Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { UserLoggedEntity } from "./userLogged.entity";

@Entity({ name: "nome_sobrenome" })
export class UserEntity {
  @PrimaryColumn()
  public uid!: string;

  @Column()
  public name!: string;

  @Column()
  public cpf!: string;

  @Column()
  public username!: string;

  @Column()
  public password!: string;

  @Column({ name: "created_at" })
  public createdAt?: Date;

  @OneToOne(() => UserLoggedEntity, (entity) => entity.LoggedEntity)
  userEntity?: UserLoggedEntity;

  @BeforeInsert()
  public beforeInsert?(): void {
    this.uid = randomUUID();
    this.createdAt = new Date(Date.now());
  }
}
