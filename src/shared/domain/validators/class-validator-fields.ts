import { validateSync } from 'class-validator';

import {
  FieldsError,
  ValidatorFieldsInterface,
} from './validator-fields.interface';

export abstract class ClassValidatorFields<PropsValidated>
  implements ValidatorFieldsInterface<PropsValidated>
{
  errors: FieldsError = null;

  validatedData: PropsValidated = null;

  validate(data: any): boolean {
    const errors = validateSync(data);

    if (errors.length > 0) {
      this.errors = {};

      for (const error of errors) {
        const field = error.property;

        // Para propriedade em questao será, retornado a mensagem de erro que esta dentro da propriedade constraints
        this.errors[field] = Object.values(error.constraints);
      }
    } else {
      this.validatedData = data;
    }

    return !errors.length;
  }
}
