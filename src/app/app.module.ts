import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { PeopleComponent } from './people/people.component';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './header/header.component';
import { PopularmoviesComponent } from './popularmovies/popularmovies.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MoviesComponent,
    TvShowComponent,
    PeopleComponent,
    LoginComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    MoviedetailsComponent,
    HeaderComponent,
    PopularmoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
