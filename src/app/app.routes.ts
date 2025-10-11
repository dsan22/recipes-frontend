import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

export const routes: Routes = [
    { path: '', component: RecipesComponent },
    { path: 'recipes/:id', component: RecipeDetailsComponent },
    { path: 'recipes/:id/edit', component: EditRecipeComponent },
];
