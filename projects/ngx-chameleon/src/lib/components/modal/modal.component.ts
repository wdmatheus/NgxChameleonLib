import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { ModalOptions } from './modal.options';
declare const $: any;
@Component({
  selector: 'ch-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnChanges {

  constructor() {
    this.modalId = `modal-${Math.random().toString(36).substring(2)}`;
  }

  ngOnInit() {

  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.size && simpleChanges.size.currentValue !== simpleChanges.size.previousValue) {
      this.modalClass = `ui ${simpleChanges.size.currentValue} modal`;
    }
  }

  modalId: string;

  @Input('show-close-btn') showCloseBtn: boolean = false;

 // @Input('show-header') showHeader: boolean = true;

  @Input('size') size: string = '';

  @Input('title') title: string = '';

  @Input('is-scrolling') isScrolling: boolean = false;

  @Input('is-scrolling-image') isScrollingImage: boolean = false;

  @Input('allow-multiple') allowMultiple: boolean = false;

  private scrollingClass = 'scrolling content';

  private scrollingImageClass = 'scrolling image content';

  private readonly defaultClass = 'ui modal';

  modalClass: string = this.defaultClass;

  contentClass: string = '';

  open(opt?: ModalOptions) {
    opt = opt || {};
    this.title = opt.title || this.title;
    this.modalClass = opt.size ? `ui ${opt.size} modal` : this.modalClass;
    this.contentClass = opt.isScrollingImage != null && opt.isScrollingImage === true
      ? this.scrollingImageClass
      : opt.isScrolling != null && opt.isScrolling === true
        ? this.scrollingClass
        : '';
    this.showCloseBtn = opt.showCloseBtn == null ? this.showCloseBtn : opt.showCloseBtn;
    $(`#${this.modalId}`)
      .modal({
        closable: opt.closable == null ? true : opt.closable,
        allowMultiple: opt.allowMultiple == null ? this.allowMultiple : opt.allowMultiple,
        onHidden: opt.onHidden || (() => { }),
        onShow: opt.onShow || (() => { })
      }).modal('show');
  }

  close() {
    $(`#${this.modalId}`).modal('hide');
  }
}
