import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { AlertOptions } from './alert.options';
declare const $:any;
@Component({
  selector: 'ch-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(){
    this.modalId = `alert-${Math.random().toString(36).substring(2)}`;
  }

  ngOnInit() {
  }

  modalId: string = '';

  options: AlertOptions;

  open(alertOptions: AlertOptions){
    this.options = alertOptions;
    this.options.cancelText = this.options.cancelText || 'Cancelar';
    this.options.confirmText = this.options.confirmText || 'OK';
    this.options.confirmBtnColor = this.options.confirmBtnColor || 'green';
    this.options.cancelBtnColor = this.options.cancelBtnColor || 'red';
    $(`#${this.modalId}`).modal({
      closable: false,
    }).modal('show');
  }

  confirm(){
    let fn = (this.options.confirmFn) || (() => {});
    fn();
    this.close();
  }
  cancel(){
    this.options.cancelFn();
    this.close();
  }

  close() {
    $(`#${this.modalId}`).modal('hide');
  }

  get confirmBtnClass(): string{
    let color = this.options && this.options.confirmBtnColor ? this.options.confirmBtnColor : 'green';
    return `ui ${color} button`
  }

  get cancelBtnClass(): string{
    let color = this.options && this.options.cancelBtnColor ? this.options.cancelBtnColor : 'red';
    return `ui ${color} button`
  }
}
