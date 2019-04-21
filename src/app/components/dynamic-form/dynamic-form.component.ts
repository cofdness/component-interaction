import {Component, Input, OnInit} from '@angular/core'
import {QuestionControlService} from '../../services/question-control.service'
import {QuestionBase} from '../../classes/question-base'
import {FormGroup} from '@angular/forms'

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = []
  form: FormGroup
  payLoad = ''
  constructor(private questionControlService: QuestionControlService) { }

  ngOnInit() {
    this.form = this.questionControlService.toFormGroup(this.questions)
  }

  onSubmit(){
    this.payLoad = JSON.stringify(this.form.value)
  }
}
