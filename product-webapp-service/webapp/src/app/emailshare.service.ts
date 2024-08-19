import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailshareService {

  // private userEmailID: string='abc@abc.com';
  private userEmailID!:string;

  constructor() { }

  setUserEmailID(email: string) {
    this.userEmailID = email;
  }

  getUserEmailID() {
    return this.userEmailID;
  }

}
