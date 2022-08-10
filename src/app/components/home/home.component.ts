import { Component, OnInit } from '@angular/core';
// import { TopBarBreadcrumbService } from 'ngx-chameleon';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { TopBarBreadcrumbService } from 'projects/ngx-chameleon/src/public-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private topBarBreadcrumbService: TopBarBreadcrumbService) { }

  ngOnInit() {
    // this.topBarBreadcrumbService.emmiter.emit({
    //   title: 'NgxChameleon',
    //   icon: 'fal fa-home fa-icon',
    //   path: ['NgxChameleon', 'Home']
    // });
    this.topBarBreadcrumbService.emmiter.emit({
      icon: 'fal fa-home fa-icon',
      paths: [ {
        route: '/home',
        title: 'Home',
        active: false
      },{
        route: ['/home', {id: 'teste 123'}],
        title: 'Path 1',
        active: false
      },{
        route: '/home',
        queryParams: {id: 'teste'},
        title: 'Path 2',
        active: false
      },{
        title: 'Path 3',
        active: true
      }]
    });
  }

  loading = false;

  form = new UntypedFormGroup({
    term: new UntypedFormControl('')
  });

  clear($event){
    this.form.reset();
  }

  search($event){
    this.loading = true;
    setTimeout(() => this.loading = false, 500);
  }
}
