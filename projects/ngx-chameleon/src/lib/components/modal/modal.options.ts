export interface ModalOptions{
  title?: string;
  size?: string;
  closable?: boolean;
  isScrolling?:boolean;
  isScrollingImage?:boolean;
  showCloseBtn?: boolean;
  allowMultiple?:boolean;
  onHidden?: Function;
  onShow?: Function;
}
