import {Component, Injector} from '@angular/core'
import {PopupService} from './services/popup.service'
import {PopupComponent} from './components/popup/popup.component'
import {createCustomElement} from '@angular/elements'
import {AdService} from './services/ad.service'
import {AdItem} from './classes/ad-item'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ads: AdItem[]
  condition = false
  constructor(
    injector: Injector,
    public popupService: PopupService,
    private adService: AdService
  ){
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, {injector})
      // Register the custom element with the browser
    customElements.define('popup-element', PopupElement)

    //get ads
    this.ads = adService.getAds()
  }
}
