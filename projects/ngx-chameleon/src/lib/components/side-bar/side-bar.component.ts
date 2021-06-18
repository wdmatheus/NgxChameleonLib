import { Component, OnInit, ElementRef, Input, HostBinding } from '@angular/core';
import { LogoData, LogoOptions } from './logo-options';

@Component({
  selector: '[ch-side-bar]',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  private readonly collapsedKey: string = 'ch-nav-state';

  ngOnInit() {

    let collapsed = localStorage.getItem(this.collapsedKey);

    if (collapsed) this.collapsed = JSON.parse(collapsed);

    (this.elementRef.nativeElement as HTMLElement).classList.add('ch-nav');

    if (this.collapsed == true)
      (this.elementRef.nativeElement as HTMLElement).classList.add('collapsed');
  }

  private collapsed: boolean = false;

  @Input('app-name') appName: string = '';
  @Input('app-url') appUrl: string = '';

  _logoOptions: LogoOptions;
  get logoOptions():LogoOptions{
    return this._logoOptions;
  }
  @Input('logo-options') set logoOptions(value: LogoOptions){

    let defaultLogo = value && value.default
      ? value.default
      : {
          url: null,
          height: 36,
          width: 36
      };

    defaultLogo = {
      ...defaultLogo,
      url: defaultLogo.url || null,
      height: defaultLogo.height || 36,
      width: defaultLogo.width || 36,
    };

    let brandLogo = value && value.brand
      ? value.brand
      : {
          url: null,
          height: 36,
          width: 36
      };

    brandLogo = {
      ...brandLogo,
      url: brandLogo.url || null,
      height: brandLogo.height || 36,
      width: brandLogo.width || 36,
    };

    value = value || {
      default: defaultLogo,
      brand: brandLogo
    };

    this._logoOptions = {
      ...value,
      default: value.default
    };
  }

  _logoUrl = '';
  @Input('logo-url') set logoUrl(value: string) {
    this._logoUrl = value;
  }
  get logoUrl(): string {
    return this._logoUrl
  }
  get logo():LogoData{
    return this.collapsed ? this.logoOptions?.brand  : this.logoOptions?.default;
  }



  @Input('expand-button-data') expandButtonData = {
    text: '',
    color: 'red',
    icon: ''
  };

  changeState() {
    this.collapsed = !this.collapsed;
    localStorage.setItem(this.collapsedKey, JSON.stringify(this.collapsed));
  }

  get expandButtonIconClass(): string {
    return `${this.expandButtonData.icon} fa-icon text ${this.expandButtonData.color}`
  }
  get expandButtonTextClass(): string {
    return `ch-menu-item-label text  ${this.expandButtonData.color}`
  }
}
