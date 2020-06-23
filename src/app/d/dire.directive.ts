import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';
import { ContService } from '../services/cont.service';

@Directive({
  selector: '[appDire]'
})
export class DireDirective {

  constructor(private el: ElementRef,private counterSVC: ContService) { }

  @HostListener('click')onClick(){
    console.log("this el for click "+ this.el);
   this.el.nativeElement.style.backgroundColor = 'Coral';
   this.counterSVC.clickimCounter++;
  }

 
  @HostBinding('style.backgroundColor') color = "DarkGrey"; 
  @HostListener('mouseenter') onMouseEnter(){
    this.color= this.color === 'Violet' ? 'yellow' : 'Violet';
  }


  // @HostListener('mouseenter') onMouseEnter(){
  //   this.el.nativeElement.style.backgroundColor = this.el.nativeElement.style.backgroundColor == 'Violet' ? 'yellow' : 'Violet';
  //   console.log("this el for mouseenter "+ this.el);
  //   this.counterSVC.hoverCounter++
  // }

  @HostListener('dblclick')ondblClic(){
    console.log("this el for click "+ this.el);
   this.el.nativeElement.style.backgroundColor = 'red';
  }

}
