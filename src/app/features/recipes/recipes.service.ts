import { Injectable } from '@angular/core';

import { AddImageResponse, ApiResponse, CreateBlankRecipeDTO, CreateRecipeResponse, Image, Recipe, RecipeDetails, Recipes } from '../../../types';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from '../../core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private apiService: ApiService) { }

  public getAllRecipes():Observable<Recipe[]>
  {
    return this.apiService.get<{ data: Recipe[] }> ('recipes', {
      params: {},
      responseType: 'json'
    }).pipe(
      map(response => response.data) // unwrap the data
    );
  } 

  public getRecipe(id:number):Observable<RecipeDetails>
  {
    return this.apiService
    .get<{ data: RecipeDetails }>(`recipes/${id}`, {
      params: {},
      responseType: 'json'
    }) // pass empty options
    .pipe(
      map(response => response.data) // unwrap the data
    );
  }
  
  public getMyRecipes():Observable<Recipe[]>
  {
    return this.apiService
    .get<{ data: Recipe[] }>(`my-recipes`, {
      params: {},
      responseType: 'json'
    }) // pass empty options
    .pipe(
      map(response => response.data) // unwrap the data
    );
  } 

  public updateRecipe(id: number, recipeData: any): Observable<RecipeDetails> {
    return this.apiService
      .put<RecipeDetails>(`recipes/${id}`, recipeData, {
        responseType: 'json'
      });
  }

  public createRecipe(recipeData: CreateBlankRecipeDTO): Observable<CreateRecipeResponse> {
    return this.apiService
      .post<CreateRecipeResponse>('recipes', recipeData, {
        responseType: 'json'
      });
  }

  public addImage(recipe_id: number, formData: FormData): Observable<AddImageResponse> {
    return this.apiService.post<AddImageResponse>(
      `recipes/${recipe_id}/images`,formData,                         
      { responseType: 'json' }
    );
  }

  public deleteImage(recipe_id: number, image_id:number): Observable<ApiResponse> {
    return this.apiService.delete<ApiResponse>(
      `recipes/${recipe_id}/images/${image_id}`,                         
      { responseType: 'json' }
    );
  }

}
