import { Component, OnInit } from '@angular/core';
import { TopBarBreadcrumbService } from 'ngx-chameleon';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(
    private topBarBreadcrumbService: TopBarBreadcrumbService
  ) { }

  ngOnInit() {
    this.topBarBreadcrumbService.emmiter.emit({
      icon: 'fas fa-id-card-alt fa-icon',
      path: ['NgxChameleon', 'Account']
    });
  }

}
