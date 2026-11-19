import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

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

  myForm:FormGroup = this.formBuilder.group(
    {
      name: ['', [Validators.required, Validators.minLength(3)] ],
      price: [0, [Validators.required, Validators.min(10)] ] ,
      inStorage: [0, [Validators.required, Validators.min(0)] ]
    }
  )

  isValidField(fieldName: string):boolean|null{

    return !!this.myForm.controls[fieldName].errors  //devuelve true si campo tiene cualquier tipo de error

  }

  getFieldError(fieldName: string):string|null{

    if(!this.myForm.controls[fieldName]) return null;

    const errorsObject = this.myForm.controls[fieldName].errors ?? {}
    //recorrer objeto de errores
    for (const key of Object.keys(errorsObject)) {
      switch(key){
        case 'required':
          return 'El campo es requerido.';
        case 'minlength':
          return `Debe tener un mínimo de ${errorsObject['minlength']['requiredLength']} caracteres.`;
        case 'min':
          return `El valor mínimo es ${errorsObject['min']['min']}.`;
      }
    }

    return null
  }


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
