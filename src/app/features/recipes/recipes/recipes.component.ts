import { Component } from '@angular/core';
import { Recipe, Recipes } from '../../../../types';
import { RecipeComponent } from '../recipe/recipe.component';
import { CommonModule } from '@angular/common';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes',
  imports: [RecipeComponent,CommonModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  constructor(private recipesService: RecipesService) { }

  recipes:Recipe[] = [];
  ngOnInit() {
    this.recipesService.getAllRecipes().subscribe(recipes => this.recipes = recipes);
   }  
}
