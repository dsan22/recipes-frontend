import { Component} from '@angular/core';
import { RecipeDetails } from '../../../../types';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-recipe-details',
  imports: [CommonModule,FormsModule],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {

  constructor( 
    private route: ActivatedRoute, 
    private recipesService: RecipesService,
    private router:Router
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

  editRecipe() {
    this.router.navigate(['recipes', this.recipe.id, 'edit']);
  } 
}
