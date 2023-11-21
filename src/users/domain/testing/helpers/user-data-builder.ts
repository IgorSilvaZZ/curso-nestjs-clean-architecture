import { faker } from '@faker-js/faker';

import { UserProps } from '../../entities/user.entity';

type PropsBuilder = {
  name?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
};

export function UserDataBuilder(propsBuilder: PropsBuilder = {}): UserProps {
  return {
    name: propsBuilder.name ?? faker.person.fullName(),
    email: propsBuilder.email ?? faker.internet.email(),
    password: propsBuilder.password ?? faker.internet.password(),
    createdAt: propsBuilder.createdAt ?? new Date(),
  };
}
