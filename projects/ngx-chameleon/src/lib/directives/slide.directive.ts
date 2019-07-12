import { Directive, ElementRef, AfterViewInit, OnInit  } from '@angular/core';

declare var $: any;

@Directive({
    selector: '[ch-slide]'

})
export class SlideDirective implements OnInit, AfterViewInit  {

    constructor(private element: ElementRef) {
    }

    ngOnInit(){
      (this.element.nativeElement as HTMLElement).classList.add('ui', 'toggle', 'checkbox');
    }

    ngAfterViewInit() {
      $(this.element.nativeElement).checkbox();
    }

}
