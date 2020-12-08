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

  get domOverlay(): any {
    return document.getElementById(this.ids.overlay);
  }

  get domDialogContainer(): any {
    return document.getElementById(this.ids.dialogContainer);
  }

  private defaultDuration = '300';

  get duration(): string {
    return this.defaultDuration;
  }

  get effectDuration(): number {
    return Number.parseInt(this.duration, 0);
  }

  @Input('duration') set duration(value: string) {
    this.defaultDuration = value;
  }

  @Input('title') title: string;

  @Input('title-is-html') titleIsHtml = false;

  @Input('close-on-click')
  closeOnClick = true;

  @Input('width') width = '400px';

  @Input('on-close') onClose: () => void;

  ids: any = {
    overlay: `${this.idService.get()}-overlay`,
    dialog: `${this.idService.get()}-dialog`,
    dialogContainer: `${this.idService.get()}-dialog-container`
  };

  ngOnInit() {

  }

  ngAfterViewInit() {

    $(this.idDialog).on('click', (e) => {
      this.closeEvent(e);
      e.stopPropagation();
    });

    $(this.idOverlay).on('click', (e) => {
      this.closeEvent(e);
      e.stopPropagation();
    });

    $(this.idDialogContainer).on('click', (e) => {
      this.closeEvent(e);
      e.stopPropagation();
    });

    $(this.idDialog).on('keydown', (e) => {
      $.keyboardClose(e, close);
    });

    // if (this.domOverlay) {
    //   (this.domOverlay as HTMLElement).removeEventListener('click', (e) => this.closeEvent(e), false);
    // }
  }

  ngOnDestroy() {

    // if (this.domOverlay) {
    //   (this.domOverlay as HTMLElement).removeEventListener('click', (e) => this.closeEvent(e), false);
    // }
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
    if (this.onClose) {
      this.onClose();
    }
  }

  closeEvent(e: any) {

    if (this.closeOnClick === true) {
      this.close();
      return;
    }

    // console.log(this.ids.overlay, e.target.id);
    // if (this.closeOnClick === false && e !== null && e.target.id === this.ids.overlay) {
    //   console.log('close 2', e.target.id);
    //   this.close();
    //   return;
    // }
  }

}
