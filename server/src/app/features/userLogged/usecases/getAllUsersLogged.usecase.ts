import { UserLoggedEntity } from "../../../shared/database/entities";
import { UserLoggedRepository } from "../repository/userLogged.repository";

export class GetAllUserLoggedUsecase {
  readonly #UserLoggedRepository: UserLoggedRepository;

  constructor(UserLoggedRepository: UserLoggedRepository) {
    this.#UserLoggedRepository = UserLoggedRepository;
  }

  async execute(): Promise<UserLoggedEntity[] | Error> {
    const result = await this.#UserLoggedRepository.getAll();

    return result;
  }
}
