import { Component, OnInit } from '@angular/core';
import { Bibliotheque } from 'src/app/core/model/bibliotheques';
import { BibliothequeService } from 'src/app/core/services/bibliotheque.service';

@Component({
  selector: 'app-list-bibliotheques',
  templateUrl: './list-bibliotheques.component.html',
  styleUrls: ['./list-bibliotheques.component.scss']
})
export class ListBibliothequesComponent implements OnInit {

  bibs :Bibliotheque[];
  test : string;
  selectedBib : Bibliotheque;
  nomVerif : string;
  selectedBibid : string;

  constructor(private bibliothequeService: BibliothequeService) { }

  ngOnInit(): void {
    this.bibliothequeService.getAllBibs().subscribe(result => this.bibs = result);
  }


  assign(bib:Bibliotheque){
    this.nomVerif = bib.nom;
    this.selectedBib = bib;
  }

  supprimer(bibliotheque: Bibliotheque){
    console.log(bibliotheque);
    
    this.bibliothequeService.deleteBib(bibliotheque.reference).subscribe();
    let index=this.bibs.indexOf(bibliotheque);
    this.bibs.splice(index,1);
  }
}
