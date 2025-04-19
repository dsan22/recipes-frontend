import { Component, Input, } from '@angular/core';
import { RecipeDetails } from '../../types';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-recipe-details',
  imports: [CommonModule],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
  constructor( 
    private route: ActivatedRoute, 
    private recipesService: RecipesService
  ) { }

  public recipe!:RecipeDetails
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
    this.recipesService.getRecipe(+id).subscribe((data)=>this.recipe=data);
    }
  }


}
