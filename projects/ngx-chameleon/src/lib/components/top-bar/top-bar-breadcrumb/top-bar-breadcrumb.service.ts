import { Injectable, EventEmitter } from '@angular/core';
import { TopBarBreadcrumbOptions } from './top-bar-breadcrumb.options';


@Injectable({
  providedIn: 'root'
})
export class TopBarBreadcrumbService{

  constructor(){

  }

  emmiter:EventEmitter<TopBarBreadcrumbOptions> = new EventEmitter<TopBarBreadcrumbOptions>();
}
