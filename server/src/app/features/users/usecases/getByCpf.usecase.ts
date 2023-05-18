import { User } from "../../../models";
import { UserEntity } from "../../../shared/database/entities";
import { UserRepository } from "../repository/users.repository";

export class GetByCpf {
  readonly #UserRepository: UserRepository;

  constructor(UserRepository: UserRepository) {
    this.#UserRepository = UserRepository;
  }

  async execute(cpf: string): Promise<UserEntity | null> {
    const result = await this.#UserRepository.getByCpf(cpf);

    if (!result) {
      return null;
    }
    return result.toJson();
  }
}
