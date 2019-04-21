import { Injectable } from '@angular/core';
import {QuestionBase} from '../classes/question-base'
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]){
    const group: any = {}
    questions.forEach(questions => {
      group[questions.key] = questions.required ? new FormControl(questions.value || '', Validators.required)
                                                : new FormControl(questions.value || '')
    })
    return new FormGroup(group)
  }
}
