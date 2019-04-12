import {Component, Input, OnInit} from '@angular/core'
import {AdComponent} from '../../classes/ad.component'

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css']
})
export class HeroProfileComponent implements OnInit, AdComponent {
  @Input() data:any
  constructor() { }

  ngOnInit() {
  }

}
