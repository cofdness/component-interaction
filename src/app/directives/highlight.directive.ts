import {Directive, ElementRef, HostListener, Input} from '@angular/core'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.highLightColor || this.defaultColor || 'red')
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null)
  }
  @Input('appHighlight') highLightColor: string
  @Input() defaultColor: string

  constructor(private el: ElementRef) { }

  private highlight(color: string){
    this.el.nativeElement.style.background = color
  }
}
