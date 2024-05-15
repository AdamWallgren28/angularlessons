import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  public namn : string = '';
  public age : number = NaN;

  constructor() {
    this.namn ='Adam';
    this.age = 28;
  }
}
