import {Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild} from '@angular/core'
import {AdItem} from '../../classes/ad-item'
import {AdDirective} from '../../directives/ad.directive'
import {AdComponent} from '../../classes/ad.component'

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[]
  currentAdIndex = -1
  @ViewChild(AdDirective) adHost: AdDirective
  interval: any
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent()
    this.getAds()
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }
  loadComponent(){
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length
    let adItem = this.ads[this.currentAdIndex]
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component)
    let viewContainerRef = this.adHost.viewContainerRef
    viewContainerRef.clear()
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data
  }
  getAds(){
    this.interval = setInterval(() => {
      this.loadComponent()
    }, 3000)
  }

}
