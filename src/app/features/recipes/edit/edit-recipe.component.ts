import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Instruction, RecipeDetails } from '../../../../types';
import { FormBuilder, FormGroup, ReactiveFormsModule,FormArray  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DragDropModule,CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { RecipesService } from '../recipes.service';
import { RecipeImageFormModalComponent } from '../../../shared/ui/recipe-image-form-modal/recipe-image-form-modal.component';

@Component({
  selector: 'app-edit-recipe',
  imports: [ReactiveFormsModule,CommonModule,DragDropModule,RecipeImageFormModalComponent],
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
    private fb:FormBuilder,
    private cdr: ChangeDetectorRef
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
        console.log(this.recipe);
        this.editForm.patchValue({
              name: data.name,
              description:data.description
              // Add other properties here
            });

        this.ingredientForms.clear(); 

        if (data.ingredients) {
          data.ingredients.forEach((ingredient: any) => {
            this.ingredientForms.push(
              this.ingredientFormGroup(ingredient.id, ingredient.name, ingredient.amount)
            );
          });
        }

        this.instructionForms.clear(); 

        if (data.instructions) {
          data.instructions.forEach((instruction: any) => {
            this.instructionForms.push(
              this.instructionsFormGroup(instruction.id, instruction.instruction,instruction.step)
            );
          });
        }
      });
    }
  }

  private ingredientFormGroup(id: number | null = null, name = "", amount = "") {
    return this.fb.group({
      id: [id],
      name: [name],
      amount: [amount],
    });
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

  private instructionsFormGroup(id: number | null = null, instruction = "", step: number | null = null) {
    return this.fb.group({
      id: [id],
      instruction: [instruction],
      step: [step],
    });
  }

  get instructionForms():FormArray {
    return this.editForm.get("instructions") as FormArray
  }

  private updateInstructionSteps(): void {
    this.instructionForms.controls.forEach((control, index) => {
      control.get('step')?.setValue(index + 1);
    });
  }

  addInstructionForm(){
    this.instructionForms.push(this.instructionsFormGroup());
    this.updateInstructionSteps(); 
  }

  deleteInstructionForm(i: number){
    this.instructionForms.removeAt(i);
    this.updateInstructionSteps(); 
  }

  dropInstruction(event: CdkDragDrop<FormGroup[]>) {
    moveItemInArray(this.instructionForms.controls, event.previousIndex, event.currentIndex);
    this.updateInstructionSteps();
  }


  //Image manager
  showImageModal = false;

  openAddImageModal() {
    this.showImageModal = true;
  }

  closeImageModal() {
    this.showImageModal = false;
  }
  

  onSaveImage(event: { image: File | null; isCover: boolean }) {
    if (!event.image) return;

    const formData = new FormData();
    formData.append('image', event.image);   // MUST match Laravel field name

    this.recipesService.addImage(this.recipe.id, formData).subscribe({
      next: (res) => {
        console.log('Upload success', res);

        // ⬇⬇⬇ UPDATE UI IMMEDIATELY ⬇⬇⬇
        if (!this.recipe.images) {
          this.recipe.images = [];
        }
        this.recipe.images.push(res.data);      // add new image to grid
        this.cdr.detectChanges();               // force Angular to refresh the view

        this.showImageModal = false;
      },
      error: err => console.error('Upload failed', err)
    });

    this.showImageModal = false;
  }

  deleteImage(image: any) {
    // DELETE API call
   
  }

  setAsCover(image: any) {
    // PATCH API call to set new cover
    
  }


  submit() {
    const id = this.recipe.id;
    const updatedRecipe = this.editForm.value;

    this.recipesService.updateRecipe(id, updatedRecipe).subscribe({
      next: () => {
        this.router.navigate(['/recipes', id]);
      },
      error: (err) => console.error('Update failed:', err)
    });
  }
  cancel() {
   this.router.navigate(['/recipes', this.recipe.id]);
  }
}
