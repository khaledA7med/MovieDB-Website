import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MoviesService } from '../../Services/movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  imagePrefix: string = 'https://image.tmdb.org/t/p/w500/';
  trendingPeople: any[] = [];

  constructor(
    private _MoviesService: MoviesService,
    private _NgxSpinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this._NgxSpinnerService.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this._NgxSpinnerService.hide();
    }, 2000);

    this._MoviesService.gettrending('person').subscribe({
      next: (res) => {
        this.trendingPeople = res.results;
      },
    });
  }
}
