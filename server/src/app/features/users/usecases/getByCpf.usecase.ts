import { User } from "../../../models";
import { UserRepository } from "../repository/users.repository";

export class GetByCpf {
  readonly #UserRepository: UserRepository;

  constructor(UserRepository: UserRepository) {
    this.#UserRepository = UserRepository;
  }

  async execute(cpf: string): Promise<User | null> {
    const result = await this.#UserRepository.getByCpf(cpf);

    if (!result) {
      return null;
    }
    return result;
  }
}
