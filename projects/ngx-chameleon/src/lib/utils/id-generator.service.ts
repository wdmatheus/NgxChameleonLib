import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdGeneratorService{
  get = () => `${Math.random().toString(36).substring(2)}`;
}
