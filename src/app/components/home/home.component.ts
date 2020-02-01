import { Component, OnInit } from '@angular/core';
import { TopBarBreadcrumbService } from 'ngx-chameleon';
import { FormGroup, FormControl } from '@angular/forms';

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

  loading = false;

  form = new FormGroup({
    term: new FormControl('')
  });

  clear($event){
    this.form.reset();
  }

  search($event){
    this.loading = true;
    setTimeout(() => this.loading = false, 500);
  }
}
