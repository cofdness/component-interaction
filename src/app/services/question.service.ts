import { Injectable } from '@angular/core';
import {QuestionBase} from '../classes/question-base'
import {QuestionDropdown} from '../classes/question-dropdown'
import {QuestionTextbox} from '../classes/question-textbox'

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }
  getQustion(){
    let questions: QuestionBase<any>[] = [
      new QuestionDropdown({
        key: 'brave',
        label: 'Brave Rating',
        options: [
          {key: 'solid', value: 'Solid'},
          {key: 'great', value: 'Great'},
          {key: 'good', value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new QuestionTextbox({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new QuestionTextbox({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ]
    return questions.sort((a,b) => a.order - b.order)
  }
}
