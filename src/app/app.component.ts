import { Component } from '@angular/core';
import { Router, Event, NavigationError, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { TopBarLoaderServiceService } from 'ngx-chameleon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
}
