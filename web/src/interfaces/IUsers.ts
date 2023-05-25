export interface User {
  uid: string;
  name: string;
  cpf: string;
  username: string;
  password: string;
}

export interface NewUser {
  name: string;
  cpf: string;
  username: string;
  password: string;
}

export interface UserLogged {
  userLoggedId: string;
  name: string;
  cpf: string;
  username: string;
  password: string;
}

export interface UserLoggedMap {
  userLoggedId: string;
  username: string;
}
