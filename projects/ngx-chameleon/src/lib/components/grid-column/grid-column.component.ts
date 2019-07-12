import { Component, OnInit, Input, ElementRef} from '@angular/core';
import { NumberValues } from '../../utils';

@Component({
  selector: '[ch-grid-column]',
  templateUrl: './grid-column.component.html',
  styleUrls: ['./grid-column.component.css']
})
export class GridColumnComponent implements OnInit {

  constructor(private  elementRef: ElementRef) {

  }

  ngOnInit() {

  }

  ngAfterViewInit(){
    (this.elementRef.nativeElement as HTMLElement).className = this.classValue;
  }


  @Input('tablet')tablet: any = 16;
  @Input('computer')computer: any = 16;
  @Input('centered')centered: boolean = false;

  get classValue(): string{
    let tablet = Number.parseFloat(this.tablet);
    let computer = Number.parseFloat(this.computer);
    return `${NumberValues.getDescription(computer) || NumberValues.getDescription(16)} wide computer ${NumberValues.getDescription(tablet) || NumberValues.getDescription(16)} wide tablet column${this.centered ? ' centered' : ''}`;
  }


}
