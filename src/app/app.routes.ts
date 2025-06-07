import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CocktailsComponent } from './pages/cocktails/cocktails.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cocktails/:name', component: CocktailsComponent },
  { path: 'ingredient/:id', component: IngredientsComponent }
];
