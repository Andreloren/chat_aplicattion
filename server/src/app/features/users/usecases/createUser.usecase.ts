import { User } from "../../../models";
import { UserEntity } from "../../../shared/database/entities";
import { CreateUserDTO } from "../dtos/user.dtos";
import { UserRepository } from "../repository/users.repository";

export class CreateUserUsecase {
  readonly #UserRepository: UserRepository;

  constructor(UserRepository: UserRepository) {
    this.#UserRepository = UserRepository;
  }
  async execute(data: CreateUserDTO): Promise<User | UserEntity> {
    const result = await this.#UserRepository.createUser(data);

    return result!.toJson();
  }
}
