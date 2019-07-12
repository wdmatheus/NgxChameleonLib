import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopBarLoaderServiceService {

  constructor() { }

  show = (selector:string = '.ch-loader-progress') => document.querySelector(selector).classList.add('is-active');

  hide = (selector:string = '.ch-loader-progress') => setTimeout(() => document.querySelector(selector).classList.remove('is-active'), 500);
}
