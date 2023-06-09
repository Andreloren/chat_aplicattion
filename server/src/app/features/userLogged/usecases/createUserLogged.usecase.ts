import { UserLoggedEntity } from "../../../shared/database/entities";
import { UserLoggedRepository } from "../repository/userLogged.repository";

export class CreateUserLoggedUsecase {
  readonly #UserLoggedRepository: UserLoggedRepository;

  constructor(UserLoggedRepository: UserLoggedRepository) {
    this.#UserLoggedRepository = UserLoggedRepository;
  }

  async execute(cpf: string): Promise<UserLoggedEntity | Error> {
    const result = await this.#UserLoggedRepository.LoggedUser(cpf);

    return result;
  }
}
