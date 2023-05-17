import { UserDTO } from "../shared/utils/dtos";

export class User {
  #uid: string;
  get userUid(): string {
    return this.#uid;
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

  constructor({ uid, name, cpf, username, password }: UserDTO) {
    this.#uid = uid;
    this.#name = name;
    this.#cpf = cpf;
    this.#username = username;
    this.#password = password;
  }

  toJson(): UserDTO {
    return {
      uid: this.#uid,
      name: this.#name,
      cpf: this.#cpf,
      username: this.#username,
      password: this.#password,
    };
  }
}
