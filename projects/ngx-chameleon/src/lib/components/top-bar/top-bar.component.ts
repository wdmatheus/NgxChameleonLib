import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: '[ch-top-bar]',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    (this.elementRef.nativeElement as HTMLElement).className = 'ch-header';
  }

}
