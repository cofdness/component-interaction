import {Directive, Input} from '@angular/core'
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms'
import {forbiddenNameValidator} from '../classes/fobidden-name-validator-fn'

@Directive({
  selector: '[appForbiddenName]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenNameDirective, multi: true}]
})
export class ForbiddenNameDirective implements Validator{
  @Input('appForbiddenName') forbiddenName: string
  constructor() { }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenName? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control): null
  }

}
