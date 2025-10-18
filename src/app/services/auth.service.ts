import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { TokenService } from './token.service';
import { LoginData, LoginResponse, RegisterData } from '../../types';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
   constructor(
    private apiService: ApiService,
    private tokenService: TokenService
  ) { }
   
  public login(data:LoginData):Observable<LoginResponse>{
      return this.apiService.post<any>("login",data).pipe(tap((response)=>{
        this.tokenService.setToken(response.access_token);
      }));
  }

   public register(data:RegisterData){
    return this.apiService.post<any>('register', data);
  }
}
