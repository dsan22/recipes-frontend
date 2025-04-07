import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Recepie, Recepies } from '../../types';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecepiesService {

  constructor(private apiService: ApiService) { }

  public getAllRecepies():Observable<Recepies>
  {
    return this.apiService.get('recipes', {
      params: {},
      responseType: 'json'
    })
  } 

}
