import {QuestionBase} from './question-base'

export class QuestionTextbox extends QuestionBase<string>{
  controlType='textBox'
  type:string
  constructor(options:{} = {}){
    super(options)
    this.type = options['type'] || ''
  }
}
