import {Component, Input, OnInit} from '@angular/core'
import {QuestionBase} from '../../classes/question-base'
import {FormGroup} from '@angular/forms'

@Component({
  selector: 'app-dynamic-question-form',
  templateUrl: './dynamic-question-form.component.html',
  styleUrls: ['./dynamic-question-form.component.css']
})
export class DynamicQuestionFormComponent implements OnInit {
  @Input() question: QuestionBase<any>
  @Input() form: FormGroup

  constructor() { }

  ngOnInit() {
  }
  get isValid(){
    return this.form.controls[this.question.key].valid
  }
}
