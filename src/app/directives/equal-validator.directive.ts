import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appEqualValidator]'
})
export class EqualValidatorDirective {

  constructor() { }

}
