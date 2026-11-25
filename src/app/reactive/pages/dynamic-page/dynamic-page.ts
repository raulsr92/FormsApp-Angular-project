import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup,FormArray,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './dynamic-page.html',
})
export class DynamicPage {

  private formBuilder  = inject(FormBuilder);

  myForm:FormGroup = this.formBuilder.group(
    {
      name:['', [Validators.required, Validators.minLength(3)]],

      favoriteGames: this.formBuilder.array(
        [
          ['Metal Gear', Validators.required],
          ['Super Mario Cart', Validators.required]

        ], Validators.minLength(2))
    }
  )

  //Getter

  get favoriteGames(){

    return this.myForm.get('favoriteGames') as FormArray

  }
}
