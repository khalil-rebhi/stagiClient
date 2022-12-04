import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { formation } from '../model/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  constructor(private http: HttpClient) { }

  public getAllFormations():Observable<formation[]>{   
    return this.http.get<formation[]>('/api/formations');
  }

  public getOneFormation(reference: string): Observable<formation>{
    return this.http.get<formation>(`/api/formations/${reference}`);
  }

  public deleteOneFormation(formation: formation){
    return this.http.delete(`/api/formations/delete-formation/${formation.reference}`).subscribe();
  }

  public postFormation(formation: formation){
    return this.http.post('/api/formations/new-formation',formation);
  }

  public editFormation(formation: formation){
      return this.http.put(`/api/formations/edit-formation/${formation.reference}`,formation);
    
  }

  public clearAll(){
    return this.http.delete(`/api/formations/deleteAll`);
  }

}
