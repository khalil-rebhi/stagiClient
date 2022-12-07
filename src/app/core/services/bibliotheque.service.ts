import { Injectable } from '@angular/core';
import { Bibliotheque } from '../model/bibliotheques';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibliothequeService {

  constructor(private http: HttpClient) { }


  public getAllBibs(): Observable<Bibliotheque[]>{
    return this.http.get<Bibliotheque[]>('/api/bibliotheque');
  }

  public deleteBib(reference: string): any {
      return this.http.delete(`/api/bibliotheque/delete-bibliotheque/${reference}`);
  }

  public deleteAll(): any{
    return this.http.delete('/api/bibliotheque/delete-all').subscribe();
  }

  public postNewBibliotheque(bib : Bibliotheque){
    return this.http.post('/api/bibliotheque/new-bibliotheque',bib);
  }

  public editBibliotheque(bib : Bibliotheque): any{
    return this.http.put(`/api/bibliotheque/edit-bibliotheque/${bib.reference}`,bib);
  }

  public getOneBibliotheque(reference: string): Observable<Bibliotheque>{
    return this.http.get<Bibliotheque>(`/api/bibliotheque/${reference}`);
  }
}