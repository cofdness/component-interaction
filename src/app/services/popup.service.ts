import {ApplicationRef, ComponentFactoryResolver, Injectable, Injector} from '@angular/core'
import {PopupComponent} from '../components/popup/popup.component'
import {NgElement, WithProperties} from '@angular/elements'

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }
  // Previous dynamic-loading method required you to set up infrastructure
  // before adding the popup to the DOM.
  showAsComponent(message: string){
    // Create element
    const popup = document.createElement('popup-component')

    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent)
    const popupComponentRef = factory.create(this.injector, [], popup)

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(popupComponentRef.hostView)

    //listen to close event
    popupComponentRef.instance.closed.subscribe(() => {
      document.body.removeChild(popup)
      this.applicationRef.detachView(popupComponentRef.hostView)
    })

    //set the message
    popupComponentRef.instance.message = message

    //add to DOM
    document.body.appendChild(popup)
  }

  // This uses the new custom-element method to add the popup to the DOM.
  showAsElement(message: string){
    //create element
    const popupEl: NgElement & WithProperties<PopupComponent> = document.createElement('popup-element') as any;

    // listen to the close event
    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl))

    //set the message
    popupEl.message = message

    // add to the DOM
    document.body.appendChild(popupEl)
  }

}
