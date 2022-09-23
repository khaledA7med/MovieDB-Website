import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendingMovies:any[] = [];
  trendingTv:any[] = [];
  trendingAll:any[] = [];
  trendingPeople:any[] = [];

  imagePrefix:string='https://image.tmdb.org/t/p/w500/';
 
  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {

    this._MoviesService.gettrending('movie').subscribe({
      next: (res)=>{
        this.trendingMovies = res.results.splice(0,10);
      }
    });
    this._MoviesService.gettrending('tv').subscribe({
      next: (res)=>{
        this.trendingTv = res.results.splice(0,10);
      }
    });
    this._MoviesService.gettrending('all').subscribe({
      next: (res)=>{
        this.trendingAll = res.results;
      }
    });
    this._MoviesService.gettrending('person').subscribe({
      next: (res)=>{
        this.trendingPeople = res.results; 
      }
    });
  }

}
