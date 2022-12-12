import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

import { MoviesDetailsComponent } from './movies-details/movies-details.component';

const MOVIES_ROUTES: Routes = [
    { path: '', component: AppComponent},
    { path: 'details', component: MoviesDetailsComponent}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(MOVIES_ROUTES);   