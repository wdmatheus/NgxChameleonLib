import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: '[ch-accordion-content]',
  templateUrl: './accordion-content.component.html',
  styleUrls: ['./accordion-content.component.css']
})
export class AccordionContentComponent implements OnInit {

  constructor(private element: ElementRef) {
    (element.nativeElement as HTMLElement).classList.add('content');
  }

  ngOnInit() {
  }

}
