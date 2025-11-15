import { Component } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Router } from '@angular/router';
import { CreateBlankRecipeDTO, Recipe, RecipeDetails, User } from '../../../../types';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from "../item/recipe.component";
import { AuthService } from '../../../core/services/auth.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-users-recipes',
  imports: [CommonModule, RecipeComponent],
  templateUrl: './users-recipes.component.html',
  styleUrl: './users-recipes.component.css'
})
export class UsersRecipesComponent {
  user:User|null=null;
  recipes: Recipe[] = [];
  constructor(private recipesService: RecipesService,private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.loadRecipes();
    
     this.authService.user$.subscribe(user => {
      this.user = user;
    });
  };

  loadRecipes() {
    this.recipesService.getMyRecipes().subscribe({
      next: (recipes) => (this.recipes=recipes),
      error: (err) => console.error('Failed to load recipes', err),
    });
    console.log(this.recipes);
  }
  createRecipe() {

    if(!this.user){
      console.error("User is not loged in");
      return;
    }
    console.log(this.user)
    var blankRecipe:CreateBlankRecipeDTO ={
      name:"Blank Name",
      description:"Blank Description",
      category_id:1,
      user_id:this.user.id
    }
     this.recipesService.createRecipe(blankRecipe).subscribe({
    next: (res) => {
      console.log(res);
      const createdId = res.id; // <-- here's the ID

      this.router.navigate(['recipes', createdId,"edit"]);
      
      // Or: this.router.navigateByUrl(`/recipes/${createdId}`);
    },
    error: (err) => {
      console.error("Failed to create recipe:", err);
    }
  });
  }
}
