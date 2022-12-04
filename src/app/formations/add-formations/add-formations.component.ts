import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { formation } from 'src/app/core/model/formation';
import { FormationsService } from 'src/app/core/services/formations.service';

@Component({
  selector: 'app-add-formations',
  templateUrl: './add-formations.component.html',
  styleUrls: ['./add-formations.component.scss']
})
export class AddFormationsComponent implements OnInit {


  public action: string;
  public formation : formation;
  public certified: boolean=false;
  public form : FormGroup = this.fb.group({
    reference : [''],
    titre: ['', Validators.required],
    domaine: ['', Validators.required],
    description: ['', Validators.required],
    prix: ['', Validators.required],
    dateDebut: ['', Validators.required],
    dateFin: ['', Validators.required],
    isCertified: [this.certified, Validators.required],
    certificat:[''],
  });
  public error: string;
  constructor(private fb : FormBuilder , private activatedRoute: ActivatedRoute, private formationService: FormationsService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    let reference = this.activatedRoute.snapshot.params['reference'];   
    if (reference != null) {
      this.action = "Modifier";      
      this.formationService.getOneFormation(reference).subscribe(
        (Object: formation) => {
          this.formation = Object;
          this.certified = Object.isCertified;
          this.form.setValue({
            'reference': Object.reference,
            'titre': Object.titre,
            'domaine': Object.domaine,
            'description': Object.description,
            'prix': Object.prix,
            'dateDebut': Object.dateDebut.toString().slice(0,10),
            'dateFin': Object.dateFin.toString().slice(0,10),
            'isCertified': this.certified,
            'certificat': Object.certificat
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
        this.formationService.postFormation(this.form.getRawValue()).subscribe(() => {
          this.router.navigateByUrl('/formations');
        },
          (err) => {
            this.error = err?.error || 'Une erreur est survenue.'
          })
      }} else {
        if (this.form.valid) {
          this.formationService.editFormation(this.form.getRawValue()).subscribe(() => {
            this.router.navigateByUrl('/formations');
          
          })
        }
      }
    }
      

  public goBack() {
    this.location.back();
  }

  public change(){
    this.certified = !this.certified;
  }

}
