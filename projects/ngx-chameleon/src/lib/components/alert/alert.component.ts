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

  alertOptions: AlertOptions;

  open(alertOptions: AlertOptions){
    this.alertOptions = alertOptions;
    this.alertOptions.cancelText = this.alertOptions.cancelText || 'Cancelar';
    this.alertOptions.confirmText = this.alertOptions.confirmText || 'OK';
    $(`#${this.modalId}`).modal({
      closable: false,
    }).modal('show');
  }

  confirm(){
    let fn = (this.alertOptions.confirmFn) || (() => {});
    fn();
    this.close();
  }
  cancel(){
    this.alertOptions.cancelFn();
    this.close();
  }

  close() {
    $(`#${this.modalId}`).modal('hide');
  }
}
