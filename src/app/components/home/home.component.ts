import { Component, OnInit } from '@angular/core';
import { TopBarBreadcrumbService } from 'ngx-chameleon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private topBarBreadcrumbService: TopBarBreadcrumbService) { }

  ngOnInit() {
    this.topBarBreadcrumbService.emmiter.emit({
      icon: 'fal fa-home fa-icon',
      path: ['NgxChameleon', 'Home']
    });
  }
}
