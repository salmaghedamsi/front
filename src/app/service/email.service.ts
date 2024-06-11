import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private baseUrl = 'http://localhost:8002/email/send';
  constructor(private http: HttpClient) { }
  sendEmail(emailData: { to: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}`, emailData);
  }


}
