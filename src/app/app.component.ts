import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, Event, NavigationError, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { TopBarLoaderServiceService, DialogComponent } from '../../projects/ngx-chameleon/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private  router: Router,
    private topBarLoaderService: TopBarLoaderServiceService) {
    this.router.events.pipe(

    ).subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.topBarLoaderService.show();
      }
      if (event instanceof NavigationEnd) {
        this.topBarLoaderService.hide();
      }
      if (event instanceof NavigationError || event instanceof NavigationCancel) {
        this.topBarLoaderService.hide();
      }
    });
  }

  ngOnInit(){
    this.dialogAccounts.onClose = () => console.log('Test on close');
  }

  @ViewChild('dialogAccounts', { static: true })dialogAccounts: DialogComponent;
}

