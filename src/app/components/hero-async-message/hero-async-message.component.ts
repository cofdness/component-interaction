import { Component, OnInit } from '@angular/core';
import {interval, Observable} from 'rxjs'
import {map, take} from 'rxjs/operators'

@Component({
  selector: 'app-hero-async-message',
  templateUrl: './hero-async-message.component.html',
  styleUrls: ['./hero-async-message.component.css']
})
export class HeroAsyncMessageComponent implements OnInit {
  message$: Observable<string>
  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ]
  constructor() { }

  ngOnInit() {
    this.resend()
  }

  resend(){
    this.message$ = interval(1000).pipe(
      take(this.messages.length),
      map(i => this.messages[i])
    )
  }

}
