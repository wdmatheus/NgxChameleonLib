import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertService, ModalComponent } from 'ngx-chameleon';;

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  constructor(
    private alertService: AlertService
  ) { }

  @ViewChild('modal', { static: true }) modal: ModalComponent;

  ngOnInit() {
  }

  alert(msg: string = 'Some alert <b>Message</b>!') {
    this.alertService.show({
      isHtml: true,
      headerTitle: 'Attention',
      msg: msg
    })
  }

  confirm() {
    this.alertService.confirm({
      cancelFn: () => this.alert('You clicked No'),
      cancelText: 'No',
      confirmText: 'Yes',
      confirmFn: () => this.alert('You clicked Yes'),
      headerTitle: 'Confirm action',
      isHtml: true,
      msg: 'Do you confirm the action?'
    });
  }

  openModal() {
    this.modal.open({
      showCloseBtn: true,
      title: 'Modal title',
      closable: true,
      size: 'large',
      isScrolling: true
    });
  }
}
