import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8002/user';
  constructor(private http: HttpClient) { }
  getUsers(): Observable<user[]> {
    return this.http.get<user[]>(this.baseUrl);
  }
}
