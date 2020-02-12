import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  private message = new BehaviorSubject('');
  private type =  new BehaviorSubject('success');
  constructor() { }
  show(message: string, type: string): void {
    this.setMessage(message);
    this.setType(type);
  }
  setMessage(message: string): void {
    this.message.next(message);
  }
  setType(type: string): void {
    this.type.next(type);
  }
  getMessage(): Observable<string> {
    return this.message.asObservable();
  }
  getType(): Observable<string> {
    return this.type.asObservable();
  }
}
