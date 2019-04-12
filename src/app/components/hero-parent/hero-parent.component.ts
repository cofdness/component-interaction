import { Component, OnInit } from '@angular/core';
import {HEROES} from '../../classes/hero'

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  heroes = HEROES;
  master = 'Master';
}
