import { Injectable } from '@angular/core';
import {AdItem} from '../classes/ad-item'
import {HeroProfileComponent} from '../components/hero-profile/hero-profile.component'
import {HeroJobAdComponent} from '../components/hero-job-ad/hero-job-ad.component'

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor() { }
  getAds(){
    return [
      new AdItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),
      new AdItem(HeroProfileComponent, {name:'Dr IQ', bio:'Smart as they came'}),
      new AdItem(HeroJobAdComponent, {headline: ' Hiring for several positions', body: 'Submit your resume today'}),
      new AdItem(HeroJobAdComponent, {headline: 'Open in all department', body: 'Apply today'})
    ]
  }

}
