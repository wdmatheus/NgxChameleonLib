export interface AlertOptions{
  msg: string;
  headerTitle?: string;
  cancelText?:string;
  confirmText?: string;
  isHtml?:boolean;
  cancelFn?:Function;
  confirmFn?:Function;
}
