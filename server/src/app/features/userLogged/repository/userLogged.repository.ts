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

  async getAll(): Promise<UserLoggedEntity[] | Error> {
    const result = await this._repositoryLogged.find();

    if (result.length === 0) {
      return new Error("Não existem Usuários logados");
    }

    return result.map((userLogged) => userLogged);
  }

  async getByCpfLogged(cpf: string): Promise<UserLogged | null> {
    const result = await this._repositoryLogged.findOneBy({ cpf });

    if (!result) {
      return null;
    }
    return this.mapToModel(result);
  }

  async deleteUserLogged(cpf: string): Promise<UserLoggedEntity | Error> {
    const result = await this._repositoryLogged.findOneBy({ cpf });

    if (!result) {
      return new Error("Usuário não logado");
    }

    await this._repositoryLogged.delete(cpf);

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
