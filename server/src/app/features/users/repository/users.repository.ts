import { DatabaseConnection } from "../../../../main/database/typeorm.connection";
import { User } from "../../../models";
import { UserEntity } from "../../../shared/database/entities";
import { HttpHelper } from "../../../shared/utils";
import { CreateUserDTO } from "../dtos/user.dtos";

export class UserRepository {
  private _repository = DatabaseConnection.connection.getRepository(UserEntity);

  async createUser(userdata: CreateUserDTO): Promise<User | undefined> {
    const user = this._repository.create(userdata);

    const result = await this._repository.save(user);

    return this.mapToModel(result);
  }

  private mapToModel(entity: UserEntity): User {
    return new User({
      uid: entity.uid,
      name: entity.name,
      cpf: entity.cpf,
      username: entity.username,
      password: entity.password,
    });
  }
}
