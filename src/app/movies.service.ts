import { Injectable } from '@angular/core';
import {SearchByTitleResponse} from "./search-by-title-response.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable, Subject, Subscription, tap} from "rxjs";
import {MoviePlot, MovieType, SearchByTitlePayload} from "./search-by-title-payload.model";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private static searchByTitleUrl = 'http://www.omdbapi.com/?apikey=db2676ba&r=json';
  private movieTypes: MovieType[] = ['movie', 'episode', 'series'];
  private moviePlots: MoviePlot[] = ['full', 'short'];

  public static defaultMovieType = 'movie';
  public static defaultMoviePlot = 'full';

  constructor(private http$: HttpClient) { }

  public searchByTitle (payload: SearchByTitlePayload): Observable<SearchByTitleResponse> {
    let url = MoviesService.searchByTitleUrl + `&s=${payload.s}`;
    if (payload.type) {
      url += `&type=${payload.type.toLowerCase()}`;
    }
    if (payload.plot) {
      url += `&plot=${payload.plot.toLowerCase()}`;
    }
    if (payload.year) {
      url += `&year=${payload.year}`;
    }
    return this.http$.get<SearchByTitleResponse>(url);
  }

  public getMovieTypes(): string[] {
    return this.movieTypes;
  }

  public getMoviePlots(): string[] {
    return this.moviePlots;
  }
}
