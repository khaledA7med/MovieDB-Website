import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private _HttpClient: HttpClient,
    private authService: AuthService
  ) {}

  getUsers(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this._HttpClient.get('https://dummyjson.com/auth/me', {
      headers: headers,
    });
  }
}
