import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { RecipeDetails } from '../../types';
import { FormBuilder, FormGroup, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css'
})
export class EditRecipeComponent {


  public recipe!:RecipeDetails
  public editForm:FormGroup

  constructor(
    private route: ActivatedRoute, 
    private recipesService: RecipesService,
    private router:Router,
    private fb:FormBuilder
  ){
    this.editForm= this.fb.group(
      {
        name : "",
        description:"",
      }
    )
  }



  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
    this.recipesService.getRecipe(+id).subscribe((data)=>{
      this.recipe=data

      this.editForm.patchValue({
            name: data.name,
            description:data.description
            // Add other properties here
          });

    });
    }

    
  }



}
