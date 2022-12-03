import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StageService } from 'src/app/core/services/stage.service';
import { Stage } from '../../core/model/stages';

@Component({
  selector: 'app-form-stage',
  templateUrl: './form-stage.component.html',
  styleUrls: ['./form-stage.component.css']
})
export class FormStageComponent implements OnInit {

  public action: string;
  public stage: Stage;
  public form: FormGroup = this.fb.group({
    reference : [''],
    sujet: ['', Validators.required],
    type: ['', Validators.required],
    description: ['', Validators.required],
    duree: ['', Validators.required],
    dateDebut: ['', Validators.required],
    dateFin: ['', Validators.required],
  });
  public error!: string;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private stageService: StageService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    let reference = this.activatedRoute.snapshot.params['reference'];
    if (reference != null) {
      this.action = "Modifier";      
      this.stageService.getStage(reference).subscribe(
        (Object: Stage) => {
          console.log(Object.dateDebut.toString().slice(0,10));
          this.stage = Object;
          this.form.setValue({
            'reference': Object.reference,
            'sujet': Object.sujet,
            'type': Object.type,
            'description': Object.description,
            'duree': Object.duree,
            'dateDebut': Object.dateDebut.toString().slice(0,10),
            'dateFin': Object.dateFin.toString().slice(0,10)
          })
        }
      )
    } else {
      this.action = "Ajouter"
      console.log(this.action);

    }
  }

  public ajouter() {
    console.log(this.form.getRawValue());
    if (this.action == "Ajouter") {
      if (this.form.valid) {
        this.stageService.postStage(this.form.getRawValue()).subscribe(() => {
          this.router.navigateByUrl('/stages');
        },
          (err) => {
            this.error = err?.error || 'Une erreur est survenue.'
          })
      }} else {
        console.log("hello");
        if (this.form.valid) {
          this.stageService.editStage(this.form.getRawValue()).subscribe(() => {
            this.router.navigateByUrl('/stages');
          },
            (err) => {
              this.error = err?.error || 'Une erreur est survenue.'
            })
        }
      }
    }
  

  public goBack() {
    this.location.back();
  }

}
