import { Component, Input, } from '@angular/core';
import { RecipeDetails } from '../../types';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeImageFormModalComponent } from '../recipe-image-form-modal/recipe-image-form-modal.component';


@Component({
  selector: 'app-recipe-details',
  imports: [CommonModule,FormsModule],
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
    this.recipesService.getRecipe(+id).subscribe((data)=>{
      this.recipe=data
    });
    }
  }

  currentImageIndex = 0;

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.recipe.images.length;
  }

  prevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.recipe.images.length) % this.recipe.images.length;
  }
}
