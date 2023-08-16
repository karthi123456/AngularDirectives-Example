import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[CustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private ele:ElementRef) { 
    
  }

  @HostListener('mouseenter') MouseEnter()
  {
    this.highLight('yellow');
  }

  @HostListener('mouseleave') MouseLeave()
  {
    this.highLight('');
  }

 private highLight(color:string){
  this.ele.nativeElement.style.backgroundColor = color;
 }

}
