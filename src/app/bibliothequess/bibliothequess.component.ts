import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BibliothequeService } from '../core/services/bibliotheque.service';

@Component({
  selector: 'app-bibliothequess',
  templateUrl: './bibliothequess.component.html',
  styleUrls: ['./bibliothequess.component.css']
})
export class BibliothequessComponent implements OnInit {

  constructor(private bibliothequeService: BibliothequeService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteAll(){
    this.bibliothequeService.deleteAll();
    window.location.reload();
  }

}
