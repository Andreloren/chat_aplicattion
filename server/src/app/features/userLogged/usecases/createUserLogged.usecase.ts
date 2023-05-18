import { UserLogged } from "../../../models";
import { UserLoggedEntity } from "../../../shared/database/entities";
import { CreateUserLoggedDTO } from "../../users/dtos/user.dtos";
import { UserRepository } from "../../users/repository/users.repository";
import { UserLoggedRepository } from "../repository/userLogged.repository";

export class CreateUserLoggedUsecase {
  readonly #UserRepository: UserRepository;
  readonly #UserLoggedRepository: UserLoggedRepository;

  constructor(
    UserRepository: UserRepository,
    UserLoggedRepository: UserLoggedRepository
  ) {
    this.#UserRepository = UserRepository;
    this.#UserLoggedRepository = UserLoggedRepository;
  }

  async execute(cpf: string): Promise<UserLoggedEntity | Error> {
    const result = await this.#UserLoggedRepository.LoggedUser(cpf);

    return result;
  }
}
