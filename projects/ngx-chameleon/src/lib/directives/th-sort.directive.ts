import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[ch-th-sort]'
})
export class ThSortDirective {

  constructor(private elementRef: ElementRef) {

  }

  private get domElem(): HTMLElement{
    return this.elementRef.nativeElement as HTMLElement;
  }

  private _currentSortField: string;
  get currentSortField(): string {
    return this._currentSortField;
  }
  @Input('current-sort-field') set currentSortField(value: string) {
    this._currentSortField = value;
  }

  private _currentSortDir: string;
  get currentSortDir(): string {
    return this._currentSortDir;
  }
  @Input('current-sort-dir') set currentSortDir(value: string) {
    this._currentSortDir = value;
  }

  private _sortField: any;
  get sortField(): string {
    return this._sortField;
  }
  @Input('sort-field') set sortField(value: string) {
    this._sortField = value;
    this.handleClass();
  }

  private handleClass(){
    if(!this.currentSortField) return;
    if(this.currentSortField == this.sortField){
      this.domElem.classList.add('sorted', this.currentSortDir === 'asc' ? 'ascending' : 'descending');
      return;
    }
    this.domElem.classList.remove('sorted');
  }

}
