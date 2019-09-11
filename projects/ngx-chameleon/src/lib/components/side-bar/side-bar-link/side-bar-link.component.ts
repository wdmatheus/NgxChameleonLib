import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ch-side-bar-link',
  templateUrl: './side-bar-link.component.html',
  styleUrls: ['./side-bar-link.component.css']
})
export class SideBarLinkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('route')route: string[] = [];
  @Input('icon')icon: string = '';
  @Input('description')description: string = '';
  @Input('exact-link')exactLink: boolean = false;
  @Input('has-children')hasChildren: boolean = false;
}
