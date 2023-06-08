import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookListComponentComponent } from './components/book-list-component/book-list-component.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';

import { ReadComponent } from './components/read/read.component';
import { SignupComponent } from './components/signup/signup.component';
import { TermsComponent } from './components/terms/terms.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'register', component:SignupComponent},
  {path:'terms', component:TermsComponent},
  {path:'audio', component:AudioPlayerComponent},
  {path:'books', component:BookListComponentComponent},
  {path:'book-details', component:BookDetailsComponent},
  {path:'readbook', component:ReadComponent},
  {path:'news', component:NewsComponent},
  {path:'about', component:AboutComponent},
  { path: 'available-books', component: DashboardComponent, data: { showAvailableBooks: true } }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
