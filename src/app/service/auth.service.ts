import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8002';


  constructor(private http: HttpClient) { }

  registerUser(userDetails: user) {
    return this.http.post(`${this.baseUrl}/users`, userDetails);
  }

  getUserByEmail(email: string): Observable<user[]> {
    return this.http.get<user[]>(`${this.baseUrl}/users?email=${email}`);
  }


}
