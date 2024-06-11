import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '../model/action';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  private baseUrl = 'http://localhost:8002/action';

  constructor(private http: HttpClient) { }
  saveAllActions(actions: Action[]): Observable<any> {
    return this.http.post(`${this.baseUrl}`, actions);
  }

  getActionById(id: number): Observable<Action> {
    return this.http.get<Action>(`${this.baseUrl}/${id}`);
  }

  updateAction(id: number, action: Action): Observable<Action> {
    return this.http.put<Action>(`${this.baseUrl}/${id}`, action);
  }
  getAllActions(): Observable<Action[]> {
    return this.http.get<Action[]>(`${this.baseUrl}`);
  }
}
