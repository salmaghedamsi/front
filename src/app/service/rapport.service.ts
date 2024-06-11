import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RapportService {

  private apiUrl = 'http://localhost:8002/rapport';

  constructor(private http: HttpClient) { }

  saveAudit(auditData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, auditData);
  }
}

