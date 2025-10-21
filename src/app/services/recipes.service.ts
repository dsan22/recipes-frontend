import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Recipe, RecipeDetails, Recipes } from '../../types';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
      .put<{ data: RecipeDetails }>(`recipes/${id}`, recipeData, {
        responseType: 'json'
      })
      .pipe(map(response => response.data));
  }

}
