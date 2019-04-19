import {Directive, forwardRef, Injectable} from '@angular/core'
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms'
import {Observable} from 'rxjs'
import {HeroesService} from '../services/heroes.service'
import {catchError, map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
  })
export class UniqueAlterEgoValidator implements AsyncValidator{

  constructor(private heroesService: HeroesService) {
  }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>{
    return this.heroesService.isAlterEgoTaken(control.value).pipe(
      map(isTaken => (isTaken ? {uniqueAlterEgo: true}: null )), // we provide error here, so the error logic value is true.
      catchError(() => null)
    )
  }
}
// check the name is taken or not
@Directive({
  selector: '[appUniqueAlterEgo]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => UniqueAlterEgoValidator),
    multi: true
  }]
})
export class UniqueAlterEgoValidatorDirective {

  constructor(private validator: UniqueAlterEgoValidator) { }
  validate(control: AbstractControl){
    console.log('abc')
    this.validator.validate(control)
  }
}
