import { UserEntity } from "../../../shared/database/entities";
import { UserRepository } from "../repository/users.repository";

export class GetAllUserUsecase {
  readonly #UserRepository: UserRepository;

  constructor(UserRepository: UserRepository) {
    this.#UserRepository = UserRepository;
  }

  async execute(): Promise<UserEntity[] | Error> {
    const result = await this.#UserRepository.getAll();

    return result;
  }
}
