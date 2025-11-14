import { Routes } from '@angular/router';
import { RecipesComponent } from './features/recipes/list/recipes.component';
import { RecipeDetailsComponent } from './features/recipes/details/recipe-details.component';

import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { UsersRecipesComponent } from './features/recipes/users-recipes/users-recipes.component';
import { EditRecipeComponent } from './features/recipes/edit/edit-recipe.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: RecipesComponent },
    { path: 'recipes/:id', component: RecipeDetailsComponent },
    { path: 'recipes/:id/edit', component: EditRecipeComponent },
    { path: 'my-recipes', component: UsersRecipesComponent },
];
