import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('accessToken') != null) {
      this.saveuser();
    } else {
      this._Router.navigate(['login']);
    }
  }

  saveuser() {
    let decodedUser = JSON.stringify(localStorage.getItem('accessToken'));
    // this.userData = jwtDecode(decodedUser);
    this.userData.next(jwtDecode(decodedUser));
    // console.log(this.userData.getValue());
  }
  register(registerForm: any): Observable<any> {
    return this._HttpClient.post(
      'https://route-egypt-api.herokuapp.com/signup',
      registerForm
    );
  }
  login(loginForm: any): Observable<any> {
    return this._HttpClient.post(
      'https://route-egypt-api.herokuapp.com/signin',
      loginForm
    );
  }
  logout() {
    localStorage.removeItem('accessToken');
    this.userData.next(null);
    this._Router.navigate(['login']);
  }
}
