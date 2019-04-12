import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-child',
  templateUrl: './countdown-child.component.html',
  styleUrls: ['./countdown-child.component.css']
})
export class CountdownChildComponent implements OnInit, OnDestroy {
  seconds = 11
  message = ''
  intervalId:any
  constructor() { }

  ngOnInit() {
    this.start()
  }

  ngOnDestroy(): void {
    this.clearTimer()
  }
  start(){
    this.clearTimer()
    this.intervalId = setInterval(()=>{
      this.seconds -= 1
      if (this.seconds === 0) {
        this.message = 'Blast off'
      }
      else {
        if (this.seconds < 0) {
          this.seconds = 10 //reset timer
        }
        this.message = `T-${this.seconds} and counting ...`
      }
    }, 1000)
  }
  stop(){
    this.clearTimer()
    this.message = `On hold T-${this.seconds} seconds`
  }
  clearTimer(){
    clearInterval(this.intervalId)
  }

}
