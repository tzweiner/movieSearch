import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, RouterOutlet} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import { MovieSearchComponent } from './movie-search/movie-search.component';
import {AppRoutingModule} from "./app.routes";
import {MoviesService} from "./movies.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, MovieSearchComponent],
  imports: [
    CommonModule, RouterModule, BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule,
  ],
  bootstrap: [AppComponent],
  providers: [MoviesService],
})
export class AppModule { }
