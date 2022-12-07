import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bibliotheque } from 'src/app/core/model/bibliotheques';
import { BibliothequeService } from 'src/app/core/services/bibliotheque.service';

@Component({
  selector: 'app-form-bibliotheques',
  templateUrl: './form-bibliotheques.component.html',
  styleUrls: ['./form-bibliotheques.component.scss']
})
export class FormBibliothequesComponent implements OnInit {

  public action: string;
  public Bibliotheque : Bibliotheque;
  public form : FormGroup = this.fb.group({
    reference : [''],
    nom: ['', Validators.required]
  });
  public error: string;
  constructor(private fb : FormBuilder , private activatedRoute: ActivatedRoute, private bibliothequeService: BibliothequeService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    let reference = this.activatedRoute.snapshot.params['reference'];   
    if (reference != null) {
      this.action = "Modifier";      
      this.bibliothequeService.getOneBibliotheque(reference).subscribe(
        (Object: Bibliotheque) => {
          this.Bibliotheque = Object;
          this.form.setValue({
            'reference': Object.reference,
            'nom': Object.nom,
          })
        }
      )
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
            
            this.router.navigateByUrl('/bibliotheques');
          
          })
        }
      }
    }
      

  public goBack() {
    this.location.back();
  }
}
