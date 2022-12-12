import { Component } from '@angular/core';
import { MovieslistService } from '../movies-list/movies-list.service';


@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent {

  movies: any;
  movieId: any;

  constructor(
    public moviesListService: MovieslistService
  ) {}


  ngOnInit() {
    this.movies = this.moviesListService?.data?.allMoviesData;
    this.movieId = this.moviesListService?.data?.movieId;
  }

}
