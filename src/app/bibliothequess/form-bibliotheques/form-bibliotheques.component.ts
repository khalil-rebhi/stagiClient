import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bibliotheque } from 'src/app/core/model/bibliotheques';
import { Book } from 'src/app/core/model/book';
import { BibliothequeService } from 'src/app/core/services/bibliotheque.service';
import { BooksService } from 'src/app/core/services/books.service';

@Component({
  selector: 'app-form-bibliotheques',
  templateUrl: './form-bibliotheques.component.html',
  styleUrls: ['./form-bibliotheques.component.scss']
})
export class FormBibliothequesComponent implements OnInit {

  public action: string;
  public bibliotheque : Bibliotheque;
  public books: Book[];
  public show: boolean= false;
  public allBooks : Book[];
  public form : FormGroup = this.fb.group({
    reference : [''],
    nom: ['', Validators.required]
  });
  public error: string;
  constructor(private fb : FormBuilder ,private activatedRoute: ActivatedRoute,private booksService: BooksService, private bibliothequeService: BibliothequeService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    let reference = this.activatedRoute.snapshot.params['reference'];   
    if (reference != null) {
      this.action = "Modifier";      
      this.bibliothequeService.getOneBibliotheque(reference).subscribe(
        (Object: Bibliotheque) => {
          this.bibliotheque = Object;
          this.books = this.bibliotheque.livres;
          this.form.setValue({
            'reference': Object.reference,
            'nom': Object.nom,
          })
        }
      );
      this.booksService.getAllBooks().subscribe(result => this.allBooks = result);
    } else {
      this.action = "Ajouter"
    }
  }

  public ajouter() {
    if (this.action == "Ajouter") {
      if (this.form.valid) {
        this.bibliothequeService.postNewBibliotheque(this.form.getRawValue()).subscribe(() => {
          this.router.navigateByUrl('/bibliotheques');
        },
          (err) => {
            this.error = err?.error || 'Une erreur est survenue.'
          })
      }} else {
        if (this.form.valid) {
          this.bibliothequeService.editBibliotheque(this.form.getRawValue()).subscribe(() => {
            this.booksService.addBooks(this.books,this.bibliotheque).subscribe();
            this.router.navigateByUrl('/bibliotheques');
          })
        }
      }
    }
      

  public goBack() {
    this.location.back();
  }

  public showBooks(){
    this.filterBooks(this.allBooks, this.books);
    this.show = !this.show;
  }

  private filterBooks(allbooks : Book[], books : Book[]): any{
    allbooks.forEach(element => {
      console.log(element);
      if(books.indexOf(element) != -1){
        allbooks.splice(books.indexOf(element),1);
      }
    });
    console.log(allbooks);
    console.log(books);
  }
  
  public addToBib(id: string): any{
    let index = this.allBooks.find(result => result.id==id);
    if (index) {
      this.books.push(index);
      this.allBooks.splice(this.allBooks.indexOf(index),1);
    }
  }

  public removeFromBib(book: Book): any{
    if (book) {

      this.books.splice(this.books.indexOf(book),1);
      this.allBooks.push(book);
  }
}
}
