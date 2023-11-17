import { faker } from '@faker-js/faker';

import { UserEntity, UserProps } from '../../user.entity';

describe('UserEntity unit tests', () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    sut = new UserEntity(props);
  });

  it('Constructor method', () => {
    expect(sut.userProps.name).toEqual(props.name);
    expect(sut.userProps.email).toEqual(props.email);
    expect(sut.userProps.password).toEqual(props.password);
    expect(sut.userProps.createdAt).toBeInstanceOf(Date);
  });

  it('Getter of name field', () => {
    expect(sut.userProps.name).toBeDefined();
    expect(sut.userProps.name).toEqual(props.name);
    expect(typeof sut.userProps.name).toBe('string');
  });

  it('Getter of email field', () => {
    expect(sut.userProps.email).toBeDefined();
    expect(sut.userProps.email).toEqual(props.email);
    expect(typeof sut.userProps.email).toBe('string');
  });

  it('Getter of password field', () => {
    expect(sut.userProps.password).toBeDefined();
    expect(sut.userProps.password).toEqual(props.password);
    expect(typeof sut.userProps.password).toBe('string');
  });

  it('Getter of createdAt field', () => {
    expect(sut.userProps.createdAt).toBeDefined();
    expect(sut.userProps.createdAt).toBeInstanceOf(Date);
  });
});
