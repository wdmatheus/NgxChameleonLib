import { Component, OnInit, Input, Output, EventEmitter, ElementRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { ChSearchFormToggleButton, ChSearchFormToggleOptions } from './ch-search-form-toggle-options';
declare const $: any;
@Component({
  selector: '[ch-search-form-toggle]',
  templateUrl: './ch-search-form-toggle.component.html',
  styleUrls: ['./ch-search-form-toggle.component.css']
})
export class ChSearchFormToggleComponent implements OnInit {

  defaultTooltipPosition: string = 'top left';

  private defaultTopShowHideButton: ChSearchFormToggleButton = {
    color: 'blue',
    icon: 'fas fa-filter'
  }

  private defaultTopSearchButton: ChSearchFormToggleButton = {
    color: 'blue',
    icon: 'fas fa-sync'
  }

  private defaultBottomClearButton: ChSearchFormToggleButton = {
    color: 'orange',
    icon: 'fas fa-eraser fa-icon',
    hiddenText: 'Limpar',
    visibleText: 'Limpar',
  }

  private defaultBottomSearchButton: ChSearchFormToggleButton = {
    color: 'blue',
    icon: 'fas fa-filter fa-icon',
    hiddenText: 'Pesquisar',
    visibleText: 'Pesquisar'
  }

  private _options: ChSearchFormToggleOptions = {
    topBtnsPosition: 'left',
    bottomClearButton: this.defaultBottomClearButton,
    bottomSearchButton: this.defaultBottomSearchButton,
    topSearchButton: this.defaultTopSearchButton,
    topShowHideButton: this.defaultTopShowHideButton
  };

  get options(): ChSearchFormToggleOptions {
    return this._options;
  }

  @Input('options') set options(value: ChSearchFormToggleOptions) {
    this._options = value;
    this._options.topShowHideButton = this._options.topShowHideButton || this.defaultTopShowHideButton;
    this._options.topSearchButton = this._options.topSearchButton || this.defaultTopSearchButton;
    this._options.bottomClearButton = this._options.bottomClearButton || this.defaultBottomClearButton;
    this._options.bottomSearchButton = this._options.bottomSearchButton || this.defaultBottomSearchButton;
  }

  @Input('is-hidden') hidden: boolean = true;
  @Input('loading') loading: boolean = false;
  @Output('on-clear') onClear: EventEmitter<any> = new EventEmitter<any>();
  @Output('on-search') onSearch: EventEmitter<any> = new EventEmitter<any>();
  @Output('on-change') onChange: EventEmitter<any> = new EventEmitter();

  ngOnInit() {

  }

  clear = () => this.onClear.emit();
  search = () => this.onSearch.emit();

  toggle(event: Event) {

    this.hidden = !this.hidden;

    this.onChange.emit({
      originalEvent: event,
      hidden: this.hidden
    });

  }

  get topBtnsPosition(): string {
    return this.options.topBtnsPosition === 'right' ? 'float-right' : 'float-left';
  }

  get extraBtnPosition(): string {
    switch (this.options.topBtnsPosition) {
      case 'left':
        return 'float-right';
      case 'right':
        return 'float-left';
      default:
        return 'float-right';
    }
  }
}
