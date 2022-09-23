import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  imagePrefix:string='https://image.tmdb.org/t/p/w500/';
  trendingPeople:any[] = [];

  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.gettrending('person').subscribe({
      next: (res)=>{
        this.trendingPeople = res.results; 
      }
    });
  }

}
