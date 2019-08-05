import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

//only-digits
@Directive({
    selector: '[only-digits]'
})
export class OnlyDigits {

    constructor(public el: ElementRef) {

        this.el.nativeElement.onkeypress = (evt) => {
            if (evt.which < 48 || evt.which > 57) {
                evt.preventDefault();
            }
        };

    }
}

//only-alphabets
@Directive({
    selector: '[only-alphabets]'
})
export class OnlyAlphabets {

    constructor(public el: ElementRef) {

        this.el.nativeElement.onkeypress = (evt) => {
            if (!((evt.which >= 97 && evt.which <= 122) || (evt.which >= 65 && evt.which <= 90))) {
                evt.preventDefault();
            }
        };

    }
}


