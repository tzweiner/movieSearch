import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MoviesService} from "../movies.service";
import {EMPTY, Observable, Subject, Subscription, tap} from "rxjs";
import {SearchByTitleResponse} from "../search-by-title-response.model";
import {SearchByTitlePayload} from "../search-by-title-payload.model";

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.less'
})
export class MovieSearchComponent implements OnDestroy {
  private subscriptions: Subscription = new Subscription();
  public searchInput: FormControl = new FormControl<string>("");
  public yearInput: FormControl = new FormControl<string>("");
  public plotInput: FormControl = new FormControl<string>(MoviesService.defaultMoviePlot);
  public typeInput: FormControl = new FormControl<string>(MoviesService.defaultMovieType)
  public data$: SearchByTitleResponse | null;
  private searchResponse: Subject<SearchByTitleResponse> = new Subject<SearchByTitleResponse>();

  constructor(private moviesService: MoviesService) {
    this.subscriptions.add(
      this.searchResponse
        .subscribe((data: SearchByTitleResponse) => {
          if (data.Response.toLowerCase() != 'false') {
            this.data$ = data;
          } else {
            this.data$ = null;
          }
        })
    );
  }

  public submitSearch(): void {
    const payload: SearchByTitlePayload = {
      plot: this.plotInput.value,
      type: this.typeInput.value,
      s: this.searchInput.value
    }
    if (this.yearInput?.value) {
      payload.year = this.yearInput.value;
    }
    this.moviesService.searchByTitle(payload).pipe(
      tap((response: SearchByTitleResponse) => this.searchResponse.next(response))
    ).subscribe();
  }

  public getMovieTypes(): string[] {
    return this.moviesService.getMovieTypes();
  }

  public getMoviePlots(): string[] {
    return this.moviesService.getMoviePlots();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
