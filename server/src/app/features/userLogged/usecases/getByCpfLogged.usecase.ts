import { UserLoggedEntity } from "../../../shared/database/entities";
import { UserLoggedRepository } from "../repository/userLogged.repository";

export class GetByCpfLogged {
  readonly #UserLoggedRepository: UserLoggedRepository;

  constructor(UserLoggedRepository: UserLoggedRepository) {
    this.#UserLoggedRepository = UserLoggedRepository;
  }

  async execute(cpf: string): Promise<UserLoggedEntity | null> {
    const result = await this.#UserLoggedRepository.getByCpfLogged(cpf);

    if (!result) {
      return null;
    }
    return result.toJson();
  }
}
