import { Component } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { Router } from '@angular/router';
import { Recipe, RecipeDetails } from '../../types';
import { CapitalizePipe } from "../pipes/capitalize.pipe";
import { CommonModule } from '@angular/common';
import { RecipeComponent } from "../recipe/recipe.component";

@Component({
  selector: 'app-users-recipes',
  imports: [CommonModule, RecipeComponent],
  templateUrl: './users-recipes.component.html',
  styleUrl: './users-recipes.component.css'
})
export class UsersRecipesComponent {

  recipes: Recipe[] = [];
  constructor(private recipesService: RecipesService, private router: Router) {
  }

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.recipesService.getMyRecipes().subscribe({
      next: (recipes) => (this.recipes=recipes),
      error: (err) => console.error('Failed to load recipes', err),
    });
    console.log(this.recipes);
  }
  createRecipe() {
    console.log("Creating new recipe : TODO")
  }
}
