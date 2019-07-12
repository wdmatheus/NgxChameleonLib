import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef, ComponentRef } from '@angular/core';
import { AlertComponent } from './alert.component';
import { AlertOptions } from './alert.options';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {


  }

  alertComp: any;

  private appendComponentToBody() {
    // 1. Create a component reference from the component
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(AlertComponent)
      .create(this.injector);

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // 3. Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // 4. Append DOM element to the body
    document.body.appendChild(domElem);

    // // 5. Wait some time and remove it from the component tree and from the DOM
    // setTimeout(() => {
    //     this.appRef.detachView(componentRef.hostView);
    //     componentRef.destroy();
    // }, 3000);

    this.alertComp = componentRef;
  }

  show(opt: AlertOptions) {
    if (!this.alertComp) {
      this.appendComponentToBody();
    }
    setTimeout(() => (this.alertComp as ComponentRef<AlertComponent>).instance.open(opt));
  }

  confirm(opt: AlertOptions) {
    opt.cancelFn = opt.cancelFn || (() => {});
    if (!this.alertComp) {
      this.appendComponentToBody();
    }
    setTimeout(() => (this.alertComp as ComponentRef<AlertComponent>).instance.open(opt));
  }
}
