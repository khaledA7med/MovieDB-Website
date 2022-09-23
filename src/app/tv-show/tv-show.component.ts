import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {
  

  trendingTv:any[] = [];
  imagePrefix:string='https://image.tmdb.org/t/p/w500/';

  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.gettrending('tv').subscribe({
      next: (res)=>{
        this.trendingTv = res.results;
      }
    });
  }

}
