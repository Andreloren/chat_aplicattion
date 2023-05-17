import { UserLoggedDTO } from "../shared/utils/dtos";

export class UserLogged {
  #userLoggedId: string;
  get userLoggedId(): string {
    return this.#userLoggedId;
  }

  #name: string;
  get name(): string {
    return this.#name;
  }

  #cpf: string;
  get cpf(): string {
    return this.#cpf;
  }

  #username: string;
  get username(): string {
    return this.#username;
  }

  #password: string;
  get password(): string {
    return this.#password;
  }

  constructor({
    userLoggedId,

    name,
    cpf,
    username,
    password,
  }: UserLoggedDTO) {
    this.#userLoggedId = userLoggedId;
    this.#name = name;
    this.#cpf = cpf;
    this.#username = username;
    this.#password = password;
  }

  toJson(): UserLoggedDTO {
    return {
      userLoggedId: this.#userLoggedId,
      name: this.#name,
      cpf: this.#cpf,
      username: this.#username,
      password: this.#password,
    };
  }
}
