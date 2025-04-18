import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Recipe, Recipes } from '../../types';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private apiService: ApiService) { }

  public getAllRecipes():Observable<Recipes>
  {
    return this.apiService.get('recepies', {
      params: {},
      responseType: 'json'
    })
  } 

}
