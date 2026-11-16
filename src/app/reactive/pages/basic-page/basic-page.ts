import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  imports:
    [
      JsonPipe,
      ReactiveFormsModule
    ],
  templateUrl: './basic-page.html',
})
export class BasicPage {

  private formBuilder = inject(FormBuilder);

  myForm = this.formBuilder.group(
    {
      name: ['', /*Validadores síncronos*/,/*Validadores asíncronos*/ ],
      price: [0],
      inStorage: [0]
    }
  )

  /*
  myForm = new FormGroup(
    {
      name: new FormControl(''),
      price: new FormControl(0),
      inStorage: new FormControl(0)
    }
  )
  */
}
