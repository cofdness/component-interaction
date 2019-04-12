import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core'
import {CountdownChildComponent} from '../countdown-child/countdown-child.component'

@Component({
  selector: 'app-countdown-parent',
  templateUrl: './countdown-parent.component.html',
  styleUrls: ['./countdown-parent.component.css']
})
export class CountdownParentComponent implements OnInit, AfterViewInit {

  constructor() { }
  @ViewChild(CountdownChildComponent)
  private timerComponent: CountdownChildComponent
  seconds= () => 0
  ngOnInit() {
  }
  ngAfterViewInit(): void {
    // setTimeout(()=> this.seconds = () => this.timerComponent.seconds, 1)
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0)
  }
  start(){
    this.timerComponent.start()
  }
  stop(){
    this.timerComponent.stop()
  }
}
