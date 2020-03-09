import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appClickStopPropagation]'
})
export class StopClickPropagationDirective {

  constructor() { }
  @HostListener('click', ['$event'])
  public onClick(event: any): void {
    event.stopPropagation();
  }
}
