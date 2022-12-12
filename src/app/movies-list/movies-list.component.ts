import { Component } from '@angular/core';
import { MovieslistService } from './movies-list.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})

export class MovieslistComponent {
  movies: any = [];
  filmes: any;

  constructor(private movieslistService: MovieslistService) {}

  ngOnInit() {
    this.setMovies();
    this.filmes = document.getElementById('lista-filmes');
    this.filmes.style.display = "none";
  }

  setMovies() {
    this.movieslistService.getMovies()
    .subscribe((res) => {
      this.movies = res.results;
      this.movieslistService.tranferDataMovies(res.results);
  });
}

  movieDetails(id:number){
    this.movieslistService.tranferDataChoosenMovie(id);
  }


}




