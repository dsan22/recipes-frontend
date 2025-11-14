import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

import { LoginData, LoginResponse, RegisterData, User } from '../../../types';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user = new BehaviorSubject<User | null>(null);
  user$ = this._user.asObservable();

  constructor(
    private apiService: ApiService,
    private tokenService: TokenService
  ) { this.loadUserFromStorage()}
   
  public login(data:LoginData):Observable<LoginResponse>{
      return this.apiService.post<any>("login",data).pipe(tap((response)=>{
        this.tokenService.setToken(response.access_token);

        const userData: User = {
          name: response.user.name,
          email: response.user.email,
        };

        this._user.next(userData);
        localStorage.setItem('user', JSON.stringify(userData));
      }));
  }

  public logout(){
    this.tokenService.removeToken();
    this._user.next(null);
    localStorage.removeItem('user');
  }

  public register(data:RegisterData){
    return this.apiService.post<any>('register', data);
  }

  private loadUserFromStorage() {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      this._user.next(JSON.parse(userJson));
    }
  }
}
