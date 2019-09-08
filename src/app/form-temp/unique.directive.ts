import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
    selector: '[isUnique][formControlName],[isUnique][formControl],[isUnique][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => UniqueDirective), multi: true }
    ]
})
export class UniqueDirective implements Validator {
    constructor( @Attribute('isUnique') public isUnique: string[]) {}

    validate(c: AbstractControl): { [key: string]: any } {
        // self value (e.g. retype password)
        let v = c.value;

        // control value (e.g. password)
        ////let e = c.root.get(this.isUnique);

        // value not equal
        ////if (e && v !== e.value) return {
            ////isUnique: false
        ////}
        if(this.isUnique.indexOf(v) !== -1) {
          return {
            isUnique: false
          }
        }
        else {
          return null;
        }
    }
}