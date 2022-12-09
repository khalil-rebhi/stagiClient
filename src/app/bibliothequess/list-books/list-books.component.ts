import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bibliotheque } from 'src/app/core/model/bibliotheques';
import { Book } from 'src/app/core/model/book';
import { BibliothequeService } from 'src/app/core/services/bibliotheque.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit {

  bibs: Bibliotheque[];
  reference : string;
  selectedBib : Bibliotheque;
  books : Book[];
  constructor(private bibliothequeService:BibliothequeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.reference = this.activatedRoute.snapshot.params['reference'];
    this.bibliothequeService.getAllBibs().subscribe(result => this.bibs = result);
    this.bibliothequeService.getOneBibliotheque(this.reference).subscribe(result =>{
      this.selectedBib = result; 
      this.books = result.livres;
    });
  }

  changeBib(reference: string){
    this.bibliothequeService.getOneBibliotheque(reference).subscribe(result => {
      this.selectedBib = result;
      this.books = result.livres;
    })
  }

}
