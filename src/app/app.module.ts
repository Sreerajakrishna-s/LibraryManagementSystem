import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from '././components/login/login.component';
import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookListComponentComponent } from './components/book-list-component/book-list-component.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewsComponent } from './components/news/news.component';
import { ReadComponent } from './components/read/read.component';
import { RequestComponent } from './components/request/request.component';
import { SignupComponent } from './components/signup/signup.component';
import { TermsComponent } from './components/terms/terms.component';
import { AboutComponent } from './about/about.component';




@NgModule({
  declarations: [
    AppComponent,
   LoginComponent,
   DashboardComponent,
   TermsComponent,
   BookListComponentComponent,
  AudioPlayerComponent,
  SignupComponent,
  BookDetailsComponent,
  ReadComponent,
  RequestComponent,
  NewsComponent,
  AboutComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,

  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
