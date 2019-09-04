import { Component, OnInit, Input, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
declare const $:any;
@Component({
  selector: '[ch-search-form]',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

  }

  @Input('title')title: string = 'Formulário de pesquisa';
  @Input('clearBtnText')clearBtnText: string = 'Limpar';
  @Input('searchBtnText')searchBtnText: string = 'Pesquisar';
  @Input('hiddenSearchBtnTooltip')hiddenSearchBtnTooltip: string = 'Mostrar campos de pesquisa';
  @Input('visibleSearchBtnTooltip')visibleSearchBtnTooltip: string = 'Ocultar campos de pesquisa';
  @Input('updateBtnTooltip')updateBtnTooltip: string = 'Atualizar';
  @Input('loading')loading: boolean = false;
  @Input('tootipIsInverted')tootipIsInverted: boolean = true;
  @Input('tootipIsInvertedPosition') tootipIsInvertedPosition: string = 'top left';
  @Input('with-tooltip')withTooltip: boolean = false;

  @Output('on-clear')onClear: EventEmitter<any> = new EventEmitter<any>();
  @Output('on-search')onSearch: EventEmitter<any> = new EventEmitter<any>();

  hidden: boolean = true;

  clear = () => this.onClear.emit();
  search = () => this.onSearch.emit();


}
