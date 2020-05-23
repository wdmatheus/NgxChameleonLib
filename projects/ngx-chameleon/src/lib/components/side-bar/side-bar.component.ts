import { Component, OnInit, ElementRef, Input} from '@angular/core';

@Component({
  selector: '[ch-side-bar]',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit  {

  constructor(private elementRef: ElementRef) { }

  private readonly collapsedKey: string = 'ch-nav-state';

  ngOnInit(){

    let collapsed = localStorage.getItem(this.collapsedKey);

    if(collapsed) this.collapsed = JSON.parse(collapsed);

    (this.elementRef.nativeElement as HTMLElement).classList.add('ch-nav');

    if(this.collapsed == true)
      (this.elementRef.nativeElement as HTMLElement).classList.add('collapsed');
  }
  private collapsed: boolean = false;
  @Input('app-name') appName:string = '';
  @Input('logo-url') logoUrl:string = '';
  @Input('app-url') appUrl:string = '';

  @Input('expand-button-data') expandButtonData = {
    text: '',
    color: 'red',
    icon: ''
  };

  changeState(){
    this.collapsed = !this.collapsed;
    localStorage.setItem(this.collapsedKey, JSON.stringify(this.collapsed));
  }
}
