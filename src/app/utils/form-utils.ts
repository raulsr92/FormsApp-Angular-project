import { FormArray, FormGroup, ValidationErrors } from "@angular/forms";

export class FormUtils{

  //Método reutilizables aquí

    static getTextError(errorsObject:ValidationErrors){

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

  //Método 1

    static isValidField(formGroup: FormGroup,fieldName: string):boolean|null{

      return (
          formGroup.controls[fieldName].errors  &&
          formGroup.controls[fieldName].touched
        );
    }

  //Método 2

    static getFieldError(formGroup: FormGroup,fieldName: string):string|null{

      if(!formGroup.controls[fieldName]) return null;

      const errorsObject = formGroup.controls[fieldName].errors ?? {}
      //recorrer objeto de errores

      return FormUtils.getTextError(errorsObject)
    }

  //Método 3

    static isValidFieldInArray(formArray:FormArray, fieldPosition: number){

      return(
        formArray.controls[fieldPosition].errors &&
        formArray.controls[fieldPosition].touched
      )

    }

  //Método 4

  static getFieldErrorInArray (formArray:FormArray, fieldPosition: number):string|null{

    if (formArray.controls.length === 0) return null

    const errorsArray = formArray.controls[fieldPosition].errors ?? {}

    return FormUtils.getTextError(errorsArray)
  }

}
