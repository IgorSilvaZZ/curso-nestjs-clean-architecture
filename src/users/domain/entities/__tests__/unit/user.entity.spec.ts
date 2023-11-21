import { UserEntity, UserProps } from '../../user.entity';
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';

describe('UserEntity unit tests', () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = UserDataBuilder();

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

  it('Setter of name field', () => {
    sut['name'] = 'other name';

    expect(sut.userProps.name).toEqual('other name');
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

  it('Setter of password field', () => {
    sut['password'] = 'other password';

    expect(sut.userProps.password).toEqual('other password');
    expect(typeof sut.userProps.password).toBe('string');
  });

  it('Getter of createdAt field', () => {
    expect(sut.userProps.createdAt).toBeDefined();
    expect(sut.userProps.createdAt).toBeInstanceOf(Date);
  });

  it('Should update the name field', () => {
    sut.updateName('update name');

    expect(sut.userProps.name).toEqual('update name');
  });

  it('Should update the password field', () => {
    sut.updatePassword('update password');

    expect(sut.userProps.password).toEqual('update password');
  });
});
