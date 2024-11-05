import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[LightBox]',
  standalone: true
})
export class LightBoxDirective {

  constructor(private elemetRef: ElementRef) {
    elemetRef.nativeElement.style.border = "2px solid darkblue";
  }

  @HostListener('mouseover') OnMouseOver(){
    this.elemetRef.nativeElement.style.border = "2px solid yellow";
  }
  @HostListener('mouseout') OnMouseOut(){
    this.elemetRef.nativeElement.style.border = "2px solid darkblue";
  }
}
