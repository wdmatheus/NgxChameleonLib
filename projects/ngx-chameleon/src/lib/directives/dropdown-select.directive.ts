import { Directive, ElementRef, AfterViewInit, OnInit, HostListener, Self, OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';

declare var $: any;

@Directive({
  selector: '[ch-dropdown-select]'
})
export class DropdownSelect implements OnInit, AfterViewInit, OnDestroy {

  constructor(private element: ElementRef,
    @Self() private ngControl: NgControl) {
  }

  ngOnInit() {
    (this.element.nativeElement as HTMLElement).classList.add('ui', 'search', 'selection', 'dropdown');
    if (this.ngControl) {
      this.ngControl.valueChanges.pipe(
        takeWhile(() => this.isAlive)
      ).subscribe(value => {
        if (!this.cleared && (!value || (value instanceof Array && value.length == 0))) {
          setTimeout(() => $(this.element.nativeElement.parentElement).dropdown('clear'));
          this.cleared = true;
          return;
        }
        this.cleared = false;
      });
    }

  }

  ngAfterViewInit() {
    this.initialize();
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  private cleared: boolean = false;

  private isAlive: boolean = true;

  private initialize() {
    $(this.element.nativeElement).dropdown({
      ignoreCase: true,
      match: 'text',
      fullTextSearch: true
    });
  }

  private clear() {
    $(this.element.nativeElement.parentElement).dropdown("clear");
  }
}
