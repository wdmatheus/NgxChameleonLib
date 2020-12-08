import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'ch-embed',
  templateUrl: './embed.component.html',
  styleUrls: ['./embed.component.css']
})
export class EmbedComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.initialize();
  }

  private _url: string;
  get url(): string {
    return this._url;
  }
  @Input('url') set url(value: string) {
    this._url = value;
    this.initialize();
  }

  @ViewChild('embed', { static: true })embed: ElementRef;

  private initialize(){
    if(!this.url)return;
    (this.embed.nativeElement as HTMLElement).setAttribute('data-url', this.url);
    $(this.embed.nativeElement).embed();
  }
}
