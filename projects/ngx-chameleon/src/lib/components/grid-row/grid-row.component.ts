import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: '[ch-grid-row]',
  templateUrl: './grid-row.component.html',
  styleUrls: ['./grid-row.component.css']
})
export class GridRowComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

  }

  ngAfterViewInit(){
    (this.elementRef.nativeElement as HTMLElement).classList.add('ui', 'grid');
  }

}
