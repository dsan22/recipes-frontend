import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

export const routes: Routes = [
    { path: '', component: RecipesComponent },
    { path: 'recipes/:id', component: RecipeDetailsComponent }
];
