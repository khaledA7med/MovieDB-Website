import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworksComponent } from './networks/networks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvShowComponent } from './tv-show/tv-show.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', canActivate:[AuthGuard], component:HomeComponent},
  {path:'about',canActivate:[AuthGuard], component:AboutComponent},
  {path:'movies',canActivate:[AuthGuard], component:MoviesComponent},
  {path:'MovieDetails/:id',canActivate:[AuthGuard], component:MoviedetailsComponent},
  {path:'tv-shows',canActivate:[AuthGuard], component:TvShowComponent},
  {path:'people',canActivate:[AuthGuard], component:PeopleComponent},
  {path:'networks',canActivate:[AuthGuard], component:NetworksComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
