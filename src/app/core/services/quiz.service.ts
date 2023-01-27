import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }
  public getQuizs(): Observable<string[]>{
    return this.http.get<string[]>('/api/questions/domaine');
  }
}
