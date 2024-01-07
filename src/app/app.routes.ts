import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {MovieSearchComponent} from "./movie-search/movie-search.component";

export const routes: Routes = [
  { path: '**', redirectTo: 'search' },
  { path: 'search', component: MovieSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
