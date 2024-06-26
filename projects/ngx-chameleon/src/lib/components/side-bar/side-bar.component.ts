import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit } from '@angular/core';
import { LogoData, LogoOptions } from './logo-options';

@Component({
  selector: '[ch-side-bar]',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit, AfterViewInit, AfterContentChecked {

  constructor(
    private elementRef: ElementRef,
    private cdref: ChangeDetectorRef) { }

  private readonly collapsedKey: string = 'ch-nav-state';



  ngOnInit() {

    let collapsed = localStorage.getItem(this.collapsedKey);

    if (collapsed) this.collapsed = JSON.parse(collapsed);
    this.isCollapsed = this.collapsed;

    (this.elementRef.nativeElement as HTMLElement).classList.add('ch-nav');

    if (this.collapsed == true)
      (this.elementRef.nativeElement as HTMLElement).classList.add('collapsed');
  }

  ngAfterViewInit() {

    this.changes = new MutationObserver((mutations: MutationRecord[]) => {
      mutations.forEach((mutation: MutationRecord) => {
        const classList = (mutation.target as HTMLElement).classList;

        if (classList.contains('collapsed') && classList.contains('hover')) {
          this.isCollapsed = false;
          return;
        }
        if (classList.contains('collapsed')) {
          this.isCollapsed = true;
          return;
        }
        this.isCollapsed = false;
      });
    }
    );

    this.changes.observe(this.elementRef.nativeElement, {
      attributes: true,
      childList: true,
      characterData: true
    });
  }

  ngAfterContentChecked() {

    this.cdref.detectChanges();

  }

  private changes: MutationObserver;

  public collapsed: boolean = false;

  protected isCollapsed = false;

  @Input('app-name') appName: string = '';

  @Input('app-url') appUrl: string = '';

  _logoOptions: LogoOptions;
  get logoOptions(): LogoOptions {
    return this._logoOptions;
  }
  @Input('logo-options') set logoOptions(value: LogoOptions) {

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
  get logo(): LogoData {
    return this.isCollapsed ? this.logoOptions?.brand : this.logoOptions?.default;
  }



  @Input('expand-button-data') expandButtonData = {
    text: '',
    color: 'red',
    icon: ''
  };

  @Input('custom-expand-button') customExpandButton: CustomExpandButton;

  changeState() {
    this.collapsed = !this.collapsed;
    localStorage.setItem(this.collapsedKey, JSON.stringify(this.collapsed));
  }

  customChangeState() {
    this.collapsed = !this.collapsed;
    if (this.collapsed == true) {
      (this.elementRef.nativeElement as HTMLElement).classList.add('collapsed');
    }
    else {
      (this.elementRef.nativeElement as HTMLElement).classList.remove('collapsed');
    }
  }

  get expandButtonIconClass(): string {
    return `${this.expandButtonData.icon} fa-icon text ${this.expandButtonData.color}`
  }
  get expandButtonTextClass(): string {
    return `ch-menu-item-label text  ${this.expandButtonData.color}`
  }
}

export type CustomExpandButton = {
  expandedText: string;
  minimizedText: string;
  expandedIcon: string;
  minimizedIcon: string;
}
