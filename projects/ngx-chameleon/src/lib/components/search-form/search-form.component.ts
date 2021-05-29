import { Component, OnInit, Input, Output, EventEmitter, ElementRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
declare const $: any;
@Component({
  selector: '[ch-search-form]',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit, OnChanges {

  constructor(private elementRef: ElementRef) { }


  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.searchBtnPosition && changes.searchBtnPosition.currentValue) {
      this.searchBtnPosition = changes.searchBtnPosition.currentValue;
    }
  }

  @Input('title') title: string = 'Formulário de pesquisa';
  @Input('clearBtnText') clearBtnText: string = 'Limpar';
  @Input('searchBtnText') searchBtnText: string = 'Pesquisar';
  @Input('hiddenSearchBtnTooltip') hiddenSearchBtnTooltip: string = 'Mostrar campos de pesquisa';
  @Input('visibleSearchBtnTooltip') visibleSearchBtnTooltip: string = 'Ocultar campos de pesquisa';
  @Input('updateBtnTooltip') updateBtnTooltip: string = 'Atualizar';
  @Input('loading') loading: boolean = false;
  @Input('tootipIsInverted') tootipIsInverted: boolean = true;
  @Input('tootipIsInvertedPosition') tootipIsInvertedPosition: string = 'top left';
  @Input('with-tooltip') withTooltip: boolean = false;
  @Input('color') color: string = 'blue';
  @Input('is-hidden') hidden: boolean = true;

  @Output('on-clear') onClear: EventEmitter<any> = new EventEmitter<any>();
  @Output('on-search') onSearch: EventEmitter<any> = new EventEmitter<any>();

  @Output() onChange: EventEmitter<any> = new EventEmitter();



  @Input('searchBtnPosition') searchBtnPosition = 'left';

  clear = () => this.onClear.emit();
  search = () => this.onSearch.emit();

  toggle(event: Event) {

    this.hidden = !this.hidden;

    this.onChange.emit({
      originalEvent: event,
      hidden: this.hidden
    });

  }

  get defaultSearchBtnPosition(): string {
    return this.searchBtnPosition === 'right' ? 'float-right' : 'float-left';
  }

  get extraBtnPosition(): string {
    switch (this.searchBtnPosition) {
      case 'left':
        return 'float-right';
      case 'right':
        return 'float-left';
      default:
        return 'float-right';
    }
  }
}
