import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instruction } from '../model/instruction';
@Injectable({
  providedIn: 'root'
})
export class InstructionService {
  private BaseUrl = 'http://localhost:8002/instruction'; 
  constructor(private http: HttpClient) {}

  getInstructionsByImsId(imsId: number): Observable<Instruction[]> {
    return this.http.get<Instruction[]>(`${this.BaseUrl}?imsId=${imsId}`);
  }

  createInstruction(instruction: Instruction, imsId: number): Observable<Instruction> {
    const url = `${this.BaseUrl}?imsId=${imsId}`;
    return this.http.post<Instruction>(url, instruction);
  }
}