import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  gettrending(type:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=ee0ac69d4fad252da9a23ad95b83f4c2`)
  }
  getmovieDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ee0ac69d4fad252da9a23ad95b83f4c2&language=en-US`)
  }
  getpopularmovies():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=ee0ac69d4fad252da9a23ad95b83f4c2`)
  }
}
