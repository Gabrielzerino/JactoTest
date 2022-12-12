import { Injectable } from '@angular/core'

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root',
})
export class MovieslistService {

    readonly apiURL: string;
    movies: any;
    private _transferData: any;

    constructor(private http:HttpClient) {
        this.apiURL = 'https://api.themoviedb.org/3/movie/popular?api_key=9dd130e8912fea94331c128369573d5a';
        this._transferData = {} as any;
    }

    getMovies(): Observable<any>{
        return this.http.get(`${ this.apiURL }`)
        .pipe(map((res: any) => res))
    }

    get data(): any {
        return this._transferData;
    }

    tranferDataMovies(allMovies:any){
        this._transferData.allMoviesData = allMovies;
    }

    tranferDataChoosenMovie(movieId:any){
        this._transferData.movieId = movieId;
    }



    
}