import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from '../../../types';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private httpClient: HttpClient) {}

  get<T>(url: string, options: Options): Observable<T> {
    return this.httpClient.get<T>(this.baseUrl + url, options) as Observable<T>;
  }

  post<T>(url: string, body: any, options: Options = {}): Observable<T> {
    return this.httpClient.post<T>(this.baseUrl + url, body, options);
  }

  put<T>(url: string, body: any, options: Options = {}): Observable<T> {
    return this.httpClient.put<T>(this.baseUrl + url, body, options);
  }

  delete<T>(url: string, options: Options = {}): Observable<T> {
    return this.httpClient.delete<T>(this.baseUrl + url, options);
  }
}
