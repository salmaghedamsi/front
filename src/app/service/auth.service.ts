import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model/user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8002/api/v1/auth';
  private SECRET_KEY = 'aB06nAC0JAaJ9AHWiJlAeLmM3Z5RV+LucI4nTRYYwkvXnj7OlHdVlSWRG6eo64xpZeHWP0clSCVU8PkjeE/8p2W8yQmz1xVDY3pI99KYAN0svgY5lmhSHFL4YWjqfCUGdcSN12h7E2Mh1SYin3tq5gdCQQZZsSGmq8h4CeqbGZz+zeaErKh/UQMV+jV4qJZFJaSrPSJ6Zn7Wg/jlPzrFAWPjgak3PrKDAe3NmxQxndzy3hZiNKL3PrcqaLCwHfGFluAn0XBLv2V1VqaBGtmEjp70TIQ/Kgmh2/mZ5E4HL2zN29eRsfikntN5pDhMnVxhVms3sIjdcfQzDfRlCa3zftSOM09vxyr94H2+JWFGxck=';
  isAuthenticated: boolean=false;

  constructor(private http: HttpClient) { }

  registerUser(userDetails: user): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, userDetails).pipe(
      tap((response: any) => {
        if (response && response.token) {
          localStorage.setItem(this.SECRET_KEY, response.token); 
        }
      })
    );
  }
  loginUser(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/authenticate`, { email, password }).pipe(
      tap(response => {
        
          localStorage.setItem('token', response.token); 
          this.isAuthenticated=true;
        
      }),
      );
    
  }


  getToken(): string | null {
    return localStorage.getItem(this.SECRET_KEY);
  }

  addTokenToHeaders(): any {
    const token = this.getToken();
    if (token) {
      return { 'Authorization': `Bearer ${token}` };
    }
    return {};
  }
  getCurrentUser(): Observable<user> {
    return this.http.get<user>(`${this.baseUrl}/current-user`);
  }
}