import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { TopBarBreadcrumbService } from './top-bar-breadcrumb.service';
import { TopBarBreadcrumbOptions, TopBarBreadcrumbPath } from './top-bar-breadcrumb.options';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: '[ch-top-bar-breadcrumb]',
  templateUrl: './top-bar-breadcrumb.component.html',
  styleUrls: ['./top-bar-breadcrumb.component.css']
})
export class TopBarBreadcrumbComponent implements OnInit, OnDestroy {

  constructor(private elementRef: ElementRef,
    private service: TopBarBreadcrumbService) {
    this.service.emmiter.subscribe((options: TopBarBreadcrumbOptions) => {
      options = options || {
        icon: null,
        path: null,
        title: null,
        paths: []
      };
      this.icon = options.icon || '';
      this.title = options.title || '';
      this.paths = options.paths || [];
      this.path = this.handlePath(options.path);
    });
  }

  ngOnInit() {
    (this.elementRef.nativeElement as HTMLElement).className = 'ch-breadcrumb';
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  private isAlive: boolean = true;

  icon: string;

  title: string;

  path: string;

  paths: TopBarBreadcrumbPath[] = [];

  private handlePath(path?: string[]): string {
    if (!path) {
      return '';
    }
    if (path.length === 0) {
      return '';
    }
    return path.join(' / ');
  }

}
