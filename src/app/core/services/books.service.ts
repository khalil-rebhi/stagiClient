import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bibliotheque } from '../model/bibliotheques';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  public getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>('/api/books');
  }

  public addBooks(books : Book[], bibliotheque: Bibliotheque):any {
    return this.http.put('/api/books/addBook',bibliotheque);
  }

}
