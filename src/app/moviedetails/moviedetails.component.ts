import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css'],
})
export class MoviedetailsComponent implements OnInit {
  id: string = '';
  movieDetails: any;
  imagePrefix:string='https://image.tmdb.org/t/p/w500/';

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _MoviesService: MoviesService,
    private _NgxSpinnerService: NgxSpinnerService
  ) {
    this._NgxSpinnerService.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this._NgxSpinnerService.hide();
    }, 2000);
  }

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params['id'];

    this._MoviesService.getmovieDetails(this.id).subscribe({
      next: (res) => {
        this.movieDetails = res;
      },
    });
  }
}
