import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: '[ch-hdivider],[ch-divider]',
  templateUrl: './hdivider.component.html',
  styleUrls: ['./hdivider.component.css']
})
export class HDividerComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    (this.elementRef.nativeElement as HTMLElement).classList.add('ui', 'dividing', 'header');

  }


}
