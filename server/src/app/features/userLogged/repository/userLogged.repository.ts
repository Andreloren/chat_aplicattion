import { DatabaseConnection } from "../../../../main/database/typeorm.connection";
import { UserLogged } from "../../../models";
import {
  UserEntity,
  UserLoggedEntity,
} from "../../../shared/database/entities";

export class UserLoggedRepository {
  private _repository = DatabaseConnection.connection.getRepository(UserEntity);
  private _repositoryLogged =
    DatabaseConnection.connection.getRepository(UserLoggedEntity);

  async LoggedUser(cpf: string): Promise<UserLoggedEntity | Error> {
    const user = await this._repository.findOneBy({ cpf });

    if (!user) {
      return new Error("Usuario inexistente");
    }

    const userLogged = this._repositoryLogged.create({
      userLoggedId: user.uid,
      name: user.name,
      cpf: user.cpf,
      username: user.username,
      password: user.password,
    });

    const result = await this._repositoryLogged.save(userLogged);

    return result;
  }

  mapToModel(entity: UserLoggedEntity): UserLogged {
    return new UserLogged({
      userLoggedId: entity.userLoggedId,
      name: entity.name,
      cpf: entity.cpf,
      username: entity.username,
      password: entity.password,
    });
  }
}
