import { validate as uuidValidate } from 'uuid';

import { Entity } from '../../Entity';

type StubProps = {
  prop1: string;
  prop2: number;
};

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  it('Should set props and id', () => {
    const propsStubEntity = {
      prop1: 'value1',
      prop2: 20,
    };

    const entity = new StubEntity(propsStubEntity);

    expect(entity.propsEntity).toStrictEqual(propsStubEntity);
    expect(entity._id).not.toBeNull();
    expect(uuidValidate(entity._id)).toBeTruthy();
  });

  it('Should accept a valid uuid', () => {
    const propsStubEntity = {
      prop1: 'value1',
      prop2: 20,
    };

    const id = 'adb4c898-036b-4ede-912d-418f686d1430';

    const entity = new StubEntity(propsStubEntity, id);

    expect(uuidValidate(entity._id)).toBeTruthy();
    expect(entity._id).toBe(id);
  });

  it('Should convert a entity to a Javascript Object', () => {
    const propsStubEntity = {
      prop1: 'value2',
      prop2: 30,
    };

    const id = 'adb4c898-036b-4ede-912d-418f686d1430';

    const entity = new StubEntity(propsStubEntity, id);

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...propsStubEntity,
    });
  });
});
