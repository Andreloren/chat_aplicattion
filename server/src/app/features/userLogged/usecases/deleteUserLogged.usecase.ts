import { UserLoggedEntity } from "../../../shared/database/entities";
import { UserLoggedRepository } from "../repository/userLogged.repository";

export class DeleteUserLoggedUsecase {
  readonly #UserLoggedRepository: UserLoggedRepository;

  constructor(UserLoggedRepository: UserLoggedRepository) {
    this.#UserLoggedRepository = UserLoggedRepository;
  }

  async execute(cpf: string): Promise<UserLoggedEntity | Error> {
    const result = await this.#UserLoggedRepository.deleteUserLogged(cpf);

    return result;
  }
}
