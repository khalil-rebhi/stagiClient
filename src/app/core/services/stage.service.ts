import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Stage } from "../model/stages";

@Injectable({
  providedIn: 'root'
})
export class StageService {

  constructor(private http: HttpClient ) { }

  public getStages(): Observable<Stage[]>{
    return this.http.get<Stage[]>('/api/stages');
  }

  public postStage(stage: Stage):Observable<any>{
    return this.http.post('/api/stages/new-stage',stage);
  }

  public deleteStage(stage: Stage){
    return this.http.delete(`/api/stages/delete-stage/${stage.reference}`).subscribe();
  }
}
