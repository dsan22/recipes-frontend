import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { RecipeDetails } from '../../types';
import { FormBuilder, FormGroup, ReactiveFormsModule,FormArray  } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-recipe',
  imports: [ReactiveFormsModule,CommonModule],
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
        ingredients:fb.array([]),
        instructions:fb.array([]),
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

        this.ingredientForms.clear(); 

        if (data.ingredients) {
          data.ingredients.forEach((ingredient: any) => {
            this.ingredientForms.push(
              this.ingredientFormGroup(ingredient.name, ingredient.amount)
            );
          });
        }

        this.instructionForms.clear(); 

        if (data.instructions) {
          data.instructions.forEach((instruction: any) => {
            this.instructionForms.push(
              this.instructionsFormGroup(instruction)
            );
          });
        }
      });
    }
  }

  private ingredientFormGroup(name="",amount=""){
    return this.fb.group({
      name: name,
      amount:amount
    })
  }

  get ingredientForms():FormArray {
    return this.editForm.get("ingredients") as FormArray
  }

  addIngredientForm(){
    this.ingredientForms.push(this.ingredientFormGroup()); 
  }

  deleteIngredientForm(i: number){
    this.ingredientForms.removeAt(i);
  }


  private instructionsFormGroup(instruction=""){
    return this.fb.group({
      instruction: instruction,
    })
  }

  get instructionForms():FormArray {
    return this.editForm.get("instructions") as FormArray
  }

  addInstructionForm(){
    this.instructionForms.push(this.instructionsFormGroup()); 
  }

  deleteInstructionForm(i: number){
    this.instructionForms.removeAt(i);
  }
}
