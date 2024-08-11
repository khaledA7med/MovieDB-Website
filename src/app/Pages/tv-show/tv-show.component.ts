import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MoviesService } from '../../Services/movies.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css'],
})
export class TvShowComponent implements OnInit {
  trendingTv: any[] = [];
  imagePrefix: string = 'https://image.tmdb.org/t/p/w500/';

  constructor(
    private _MoviesService: MoviesService,
    private _NgxSpinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this._NgxSpinnerService.show();

    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this._NgxSpinnerService.hide();
    }, 2000);

    this._MoviesService.gettrending('tv').subscribe({
      next: (res) => {
        this.trendingTv = res.results;
      },
    });
  }
}
