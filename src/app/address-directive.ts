import { Directive , Input} from '@angular/core';
import {  Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[address-directive]',
  providers : [{
    provide: NG_VALIDATORS,
    useExisting:AddressDirective,
    multi:true
  }]
})

export class AddressDirective implements Validator {
 
 @Input() myParam: string;

  validate(control: AbstractControl): {[key:string]:any } | null{

    console.log(this.myParam);
     return control.value["address"] === "mumbai" ? {'isMumbai':true} : null;
     
  }
 
}
