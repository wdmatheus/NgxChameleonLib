import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FadeDirection } from './fade-direction';
declare const $: any;
@Component({
  selector: 'ch-transiction-fade',
  templateUrl: './transiction-fade.component.html',
  styleUrls: ['./transiction-fade.component.css']
})
export class TransictionFadeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  id: string = `${Math.random().toString(36).substring(2)}`;

  private _hidden: boolean = true;
  @Input('hidden') set hidden(value: boolean) {
    this._hidden = value;
    this.showHide();
  }
  get hidden(): boolean {
    return this._hidden;
  }

  private _direction: FadeDirection = FadeDirection.upDown;
  @Input('direction') set direction(value: FadeDirection){
    this._direction = value;
  }
  get direction(): FadeDirection {
    return this._direction;
  }

  showHide() {
    $(`#${this.id}`).transition(this.handleDirection());
  }

  private handleDirection() : string{
    let values = this.direction.split(' ').map(x => `fade ${x}`);
    return this.hidden ? values[0] : values[1];
  }
}
