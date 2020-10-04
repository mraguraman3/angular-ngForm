import { Directive , Input} from '@angular/core';
import {  Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[test-directive]',
  providers : [{
    provide: NG_VALIDATORS,
    useExisting:TestDirective,
    multi:true
  }]
})

export class TestDirective implements Validator {
 
 @Input() myParam: string;

  validate(control: AbstractControl): {[key:string]:any } | null{

    console.log(this.myParam);
     return control.value["inputarea1"] === "-1" ? {'isNegative':true} : null;
     
  }
 
}
