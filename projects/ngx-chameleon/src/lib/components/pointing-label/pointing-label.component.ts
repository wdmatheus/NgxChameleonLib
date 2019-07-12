import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ch-pointing-label',
  templateUrl: './pointing-label.component.html',
  styleUrls: ['./pointing-label.component.css']
})
export class PointingLabelComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  @Input('color')color:string = 'red';

  cssClass: string = `ui pointing ${this.color} basic label`;

  private _position: string;
  get position(): string {
    return this._position;
  }
  @Input('position') set position(value: string) {
    this._position = value;
    switch (value) {
      case 'top':
        this.cssClass = `ui pointing below ${this.color} basic label`;
        break;
      case 'left':
        this.cssClass = `ui left pointing ${this.color} basic label`;
        break;
      case 'right':
        this.cssClass = `ui right pointing ${this.color} basic label`;
        break;
      default:
        this.cssClass = `ui pointing ${this.color} basic label`;
    }

    console.log(this.position);
  }

}
