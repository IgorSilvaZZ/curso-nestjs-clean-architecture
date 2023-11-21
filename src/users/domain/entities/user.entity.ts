import { Entity } from '@/shared/domain/entities/Entity';

export type UserProps = {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
};

export class UserEntity extends Entity<UserProps> {
  constructor(
    public readonly userProps: UserProps,
    id?: string,
  ) {
    super(userProps, id);
    this.userProps.createdAt = this.userProps.createdAt ?? new Date();
  }

  updateName(name: string): void {
    this.name = name;
  }

  updatePassword(password: string): void {
    this.password = password;
  }

  get name() {
    return this.userProps.name;
  }

  private set name(name: string) {
    this.userProps.name = name;
  }

  get email() {
    return this.userProps.email;
  }

  get password() {
    return this.userProps.password;
  }

  private set password(password: string) {
    this.userProps.password = password;
  }

  get createdAt() {
    return this.userProps.createdAt;
  }
}
