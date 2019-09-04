import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';
import { IdGeneratorService } from '../../utils/id-generator.service';
declare const $: any;
@Component({
  selector: 'ch-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private idService: IdGeneratorService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    $(this.idDialog).on('keydown', function (e) {
      $.keyboardClose(e, close);
    });
    let dom = this.domOverlay;
    if (dom && this.closeOnClick)
      (dom as HTMLElement).addEventListener('click', () => this.close());
  }

  ngOnDestroy() {
    let dom = this.domOverlay;
    if (dom && this.closeOnClick)
      (dom as HTMLElement).removeEventListener('click', () => this.close());
  }

  get domOverlay(): any {
    return document.getElementById(this.ids.overlay);
  }

  private _duration: string = '300';

  get duration(): string {
    return this._duration;
  }

  get effectDuration(): Number {
    return Number.parseInt(this.duration, 0);
  }

  @Input('duration') set duration(value: string) {
    this._duration = value;
  };

  @Input('title') title: string;

  @Input('title-is-html') titleIsHtml: boolean = false;

  @Input('close-on-click')closeOnClick: boolean = true;

  @Input('width')width: string = '400px';

  ids: any = {
    overlay: `${this.idService.get()}-overlay`,
    dialog: `${this.idService.get()}-dialog`,
    dialogContainer: `${this.idService.get()}-dialog-container`
  }

  get idOverlay(): string {
    return `#${this.ids.overlay}`;
  }

  get idDialog(): string {
    return `#${this.ids.dialog}`;
  }

  get idDialogContainer(): string {
    return `#${this.ids.dialogContainer}`;
  }

  open() {

    $(this.idDialog).show(this.effectDuration);

    $(this.idDialog).focus();

    $(this.idDialogContainer).addClass('active');
  }

  close() {
    $(this.idDialogContainer).removeClass('active');
    $(this.idDialog).hide(this.effectDuration);
  }

}
