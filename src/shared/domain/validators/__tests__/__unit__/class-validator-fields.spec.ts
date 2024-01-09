import * as libClassValidator from 'class-validator';

import { ClassValidatorFields } from '../../class-validator-fields';

class StubClassValidatorFields extends ClassValidatorFields<{
  field: string;
}> {}

describe('ClassValidatorField unit tests', () => {
  it('Should initialize errors and validatedData variables with null', () => {
    const sut = new StubClassValidatorFields();

    expect(sut.errors).toBeNull();
    expect(sut.validatedData).toBeNull();
  });

  it('Should validate with errors', () => {
    const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync');

    spyValidateSync.mockReturnValue([
      { property: 'field', constraints: { isRequired: 'test error' } },
    ]);

    const sut = new StubClassValidatorFields();

    expect(sut.validate(null)).toBeFalsy();
    expect(spyValidateSync).toHaveBeenCalled();
    expect(sut.validatedData).toBeNull();
    expect(sut.errors).toStrictEqual({ field: ['test error'] });
  });

  it('Should validate with errors', () => {
    const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync');

    spyValidateSync.mockReturnValue([]);

    const sut = new StubClassValidatorFields();

    const data = { field: 'value' };

    expect(sut.validate(data)).toBeTruthy();
    expect(spyValidateSync).toHaveBeenCalled();
    expect(sut.validatedData).toStrictEqual(data);
    expect(sut.errors).toBeNull();
  });
});
