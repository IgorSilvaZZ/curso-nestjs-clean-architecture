export type UserProps = {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
};

export class UserEntity {
  constructor(public readonly userProps: UserProps) {
    this.userProps.createdAt = this.userProps.createdAt ?? new Date();
  }

  get name() {
    return this.userProps.name;
  }

  get email() {
    return this.userProps.email;
  }

  get password() {
    return this.userProps.password;
  }

  get createdAt() {
    return this.userProps.createdAt;
  }
}
