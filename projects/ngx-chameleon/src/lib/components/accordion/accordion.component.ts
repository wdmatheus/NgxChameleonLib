import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
declare const $:any;
@Component({
  selector: '[ch-accordion]',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit, AfterViewInit {

  constructor(private element: ElementRef) {
    (element.nativeElement as HTMLElement).classList.add('ui', 'styled', 'fluid', 'accordion');
  }

  ngOnInit() {
    $(this.element.nativeElement).accordion();
  }

  ngAfterViewInit(){
    $(this.element.nativeElement).accordion();
  }

}
