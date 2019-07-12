import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: '[ch-accordion-title]',
  templateUrl: './accordion-title.component.html',
  styleUrls: ['./accordion-title.component.css']
})
export class AccordionTitleComponent implements OnInit {

  constructor(private element: ElementRef) {
    (element.nativeElement as HTMLElement).classList.add('title');
  }

  ngOnInit() {
  }

}
