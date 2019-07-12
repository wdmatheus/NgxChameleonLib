import { Directive, ElementRef, AfterViewInit, OnInit, HostListener, Self, OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';

declare var $: any;

@Directive({
  selector: '[ch-simple-select]'
})
export class SimpleSelectDirective implements OnInit, AfterViewInit, OnDestroy {

  constructor(private element: ElementRef,
    @Self() private ngControl: NgControl) {
  }

  ngOnInit() {
    (this.element.nativeElement as HTMLElement).classList.add('ui', 'dropdown');
    if (this.ngControl) {

      this.ngControl.valueChanges.pipe(
        takeWhile(() => this.isAlive)
      ).subscribe(value => {
        setTimeout(() =>  $(this.element.nativeElement).dropdown('destroy').dropdown(),1);
      });

    }
  }

  ngAfterViewInit() {
    this.initialize();
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  private isAlive: boolean = true;

  @HostListener('change') ngOnChanges() {
    setTimeout(() =>  $(this.element.nativeElement).dropdown('destroy').dropdown(),1);
  }

  private initialize(){
    $(this.element.nativeElement).dropdown();
  }
}
