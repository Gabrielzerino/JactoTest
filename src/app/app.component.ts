import { Component, OnInit } from '@angular/core';
import { MovieslistService } from './movies-list/movies-list.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  constructor(private movieslistService: MovieslistService){}


}
