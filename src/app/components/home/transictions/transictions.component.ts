import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transictions',
  templateUrl: './transictions.component.html',
  styleUrls: ['./transictions.component.css']
})
export class TransictionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  views = {
    visible: 'visible',
    hidden: 'hidden'
  };

  currentView: string = this.views.visible;

  hiddenIfNotIsActive = (view: string) => view !== this.currentView;

  changeView(view: string){
    this.currentView = '';
    setTimeout(() => this.currentView = view, 300);
  }

}
