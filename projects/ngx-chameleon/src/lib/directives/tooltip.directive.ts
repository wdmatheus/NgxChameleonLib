import { Directive, ElementRef, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[ch-tooltip]'
})
export class TooltipDirective implements OnInit, AfterViewInit, OnDestroy {

  constructor(private element: ElementRef) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.initialize();
  }

  ngOnDestroy() {
    this.destroy();
  }


  @Input('title') title: string;
  @Input('is-inverted') isInverted: boolean = true;
  @Input('is-html') isHtml: boolean = false;
  @Input('position') position: string = 'top left';

  private _content: string;
  get content():string{
    return this._content;
  }
  @Input('content') set content(value: string){
    this._content = value;
    this.initialize();
  }

  private initialize() {
    let data = this.isHtml ? {
      html: `<div>${this.content}</div>`
    }:{
      content: this.content
    };
    $(this.element.nativeElement).popup(Object.assign(data, {
      context: 'body',
      title: this.title,
      position: this.position,
      variation: this.isInverted ? 'inverted' : ''
    }));
  }

  private destroy() {
    $(this.element.nativeElement).popup('destroy');
  }
}
