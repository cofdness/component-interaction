import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms'
import {forbiddenNameValidator} from '../../classes/fobidden-name-validator-fn'


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  profileForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(4), forbiddenNameValidator(/bob/i)]],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.formBuilder.array(
      [
        this.formBuilder.control('')
      ]
    )
  })
  onSubmit(){
    console.warn(this.profileForm.value);
  }
  get aliases(){
    return this.profileForm.get('aliases') as FormArray
  }
  get firstName(){
    return this.profileForm.get('firstName')
  }

  addAlias(){
    this.aliases.push(this.formBuilder.control(''))
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
}
