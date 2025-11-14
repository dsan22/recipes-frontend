import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';


export const AuthInterceptor: HttpInterceptorFn = (req, next) => {

  const authToken=inject(TokenService).getToken();
  if(authToken){
    const newReq=req.clone({
      setHeaders:{
        Authorization: `Bearer ${authToken}`,
      }
    });
    return next(newReq)
  }
 
  return next(req);
  
};
