import {Component, Injector} from '@angular/core'
import {PopupService} from './services/popup.service'
import {PopupComponent} from './components/popup/popup.component'
import {createCustomElement} from '@angular/elements'
import {AdService} from './services/ad.service'
import {AdItem} from './classes/ad-item'
import {QuestionService} from './services/question.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ads: AdItem[]
  condition = false

  questions: any[]
  constructor(
    injector: Injector,
    public popupService: PopupService,
    private adService: AdService,
    private questionService: QuestionService
  ){
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, {injector})
      // Register the custom element with the browser
    customElements.define('popup-element', PopupElement)

    //get ads
    this.ads = adService.getAds()

    //get form question
    this.questions = this.questionService.getQustion()
  }
}
