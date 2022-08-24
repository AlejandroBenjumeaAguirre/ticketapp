export interface AuthResponse {
  ok: boolean;
  token?: string;
  body?:  Body;
  msg?: string;
}

export interface CreateUser {
  ok:   boolean;
  msg:  string;
  body: Body;
}

export interface Body {
  uid?:       number;
  name?:      string;
  group_id?:  number;
  entity_id?: number;
  email?:     string;
  phone?:     number;
  nickname?:  string;
  active?:    boolean;
  password?:  string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface User {
  uid: string;
  name: string;
  nickname: string;
}


