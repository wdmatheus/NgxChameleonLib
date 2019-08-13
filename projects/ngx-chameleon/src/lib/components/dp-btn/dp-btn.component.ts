import { Component, OnInit, ElementRef, Input, OnDestroy } from '@angular/core';
declare const $:any;
@Component({
  selector: '[ch-dp-btn]',
  templateUrl: './dp-btn.component.html',
  styleUrls: ['./dp-btn.component.css']
})
export class DpBtnComponent implements OnInit, OnDestroy {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.changeColor();
    $(this.elementRef.nativeElement).dropdown();
  }

  ngOnDestroy(){
    $(this.elementRef.nativeElement).dropdown( 'destroy' );
  }

  private changeColor(){
    (this.elementRef.nativeElement as HTMLElement).className = `ui ${this.color} icon top left pointing dropdown button`;
  }

  private _icon: string;

  @Input('icon') public get icon(): string {
    return this._icon || 'settings icon';
  }
  public set icon(value: string) {
    this._icon = value || 'settings icon';
  }

  private _color: string;

  public get color(): string {
    return this._color;
  }
  @Input('color') public set color(value: string) {
    this._color = value;
    this.changeColor();
  }

  private _text: string;

  @Input('text') public get text(): string {
    return this._text;
  }
  public set text(value: string) {
    this._text = value;
  }

  private _header: string;

  @Input('header') public get header(): string {
    return this._header;
  }
  public set header(value: string) {
    this._header = value;
  }
}
