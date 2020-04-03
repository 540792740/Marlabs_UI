import {Inject, Injectable} from "@angular/core";

@Injectable({
  providedIn : 'root'
})

export class AuthenticationService{
  constructor() {}
  authenticate(){
    localStorage.setItem('user','bangalore');
  }
  checkAuthentication(){
    return ( localStorage.getItem('user') ==='bangalore');
  }
}
