import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './Pages/moviedetails/moviedetails.component';
import { MoviesComponent } from './Pages/movies/movies.component';
import { NotFoundComponent } from './Shared/not-found/not-found.component';
import { PeopleComponent } from './Pages/people/people.component';
import { TvShowComponent } from './Pages/tv-show/tv-show.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'about', canActivate: [AuthGuard], component: AboutComponent },
  { path: 'movies', canActivate: [AuthGuard], component: MoviesComponent },
  {
    path: 'MovieDetails/:id',
    canActivate: [AuthGuard],
    component: MoviedetailsComponent,
  },
  { path: 'tv-shows', canActivate: [AuthGuard], component: TvShowComponent },
  { path: 'people', canActivate: [AuthGuard], component: PeopleComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
