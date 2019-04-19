import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {forbiddenNameValidator} from '../../classes/fobidden-name-validator-fn'
import {UniqueAlterEgoValidator} from '../../directives/alter-ego.directive'
import {identityRevealedValidator} from '../../directives/identity-revealed.directive'

@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styleUrls: ['./hero-form-reactive.component.css']
})
export class HeroFormReactiveComponent implements OnInit {
  heroForm: FormGroup
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer']
  hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] }
  constructor(private formBuilder: FormBuilder, private uniqueAlterEgoValidator: UniqueAlterEgoValidator) { }
  ngOnInit() {
    this.heroForm = this.formBuilder.group({
      'name': [this.hero.name,[Validators.required, Validators.minLength(4), forbiddenNameValidator(/bob/i)]],
      'alterEgo': [this.hero.alterEgo, {asyncValidators: [this.uniqueAlterEgoValidator.validate.bind(this.uniqueAlterEgoValidator)], updateOn: 'blur'}],
      'power': [this.hero.power, Validators.required]
    }, {validators: identityRevealedValidator})
  }
  get name(){
    return this.heroForm.get('name')
  }
  get power(){
    return this.heroForm.get('power')
  }
  get alterEgo(){
    return this.heroForm.get('alterEgo')
  }
}
