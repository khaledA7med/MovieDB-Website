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

    if (localStorage.getItem('token') != null) {
      this.saveuser();
    } else {
      this._Router.navigate(['login']);
    }
  }

  login(loginForm: any): Observable<any> {
    return this._HttpClient.post(
      'https://dummyjson.com/auth/login',
      loginForm
    );
  }

  saveuser() {
    let decodedUser = JSON.stringify(localStorage.getItem('token'));
    this.userData.next(jwtDecode(decodedUser));
  }

  logout() {
    localStorage.removeItem('token');
    this.userData.next(null);
    this._Router.navigate(['login']);
  }
}
