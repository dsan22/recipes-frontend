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

  public getAllRecipes():Observable<Recipes>
  {
    return this.apiService.get('recipes', {
      params: {},
      responseType: 'json'
    })
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

}
