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
    if (this.tooltip)
      this.initialize();
  }

  ngOnDestroy() {
    this.destroy();
  }


  private _tooltip: string;
  get tooltip(): string {
    return this._tooltip;
  }
  @Input('tooltip') set tooltip(value: string) {
    this._tooltip = value;
    if (this.tooltip) this.initialize();
  }

  private _isInverted: boolean = true;
  get isInverted(): boolean {
    return this._isInverted;
  }
  @Input('is-inverted') set isInverted(value: boolean) {
    this._isInverted = value;
    if (this.tooltip) this.initialize();
  }


  private initialize() {
    (this.element.nativeElement as HTMLElement).setAttribute('data-tooltip', this.tooltip);
    if (this._isInverted)
      (this.element.nativeElement as HTMLElement).setAttribute('data-inverted', '');
    $(this.element.nativeElement).popup();
  }

  private destroy() {
    (this.element.nativeElement as HTMLElement).setAttribute('data-tooltip', this.tooltip);
    (this.element.nativeElement as HTMLElement).setAttribute('data-inverted', '');
    $(this.element.nativeElement).popup('destroy');
  }
}
