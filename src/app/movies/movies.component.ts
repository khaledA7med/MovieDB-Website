import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  
  trendingMovies:any[] = [];
  imagePrefix:string='https://image.tmdb.org/t/p/w500/';


  constructor(private _MoviesService:MoviesService, private _NgxSpinnerService:NgxSpinnerService) {}

  ngOnInit(): void {
    this._NgxSpinnerService.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this._NgxSpinnerService.hide();
    }, 2000);
    
    this._MoviesService.gettrending('movie').subscribe({
      next: (res)=>{
        this.trendingMovies = res.results;
      }
  })
}
}