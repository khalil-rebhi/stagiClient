import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { StageService } from 'src/app/core/services/stage.service';

@Component({
  selector: 'app-form-stage',
  templateUrl: './form-stage.component.html',
  styleUrls: ['./form-stage.component.css']
})
export class FormStageComponent implements OnInit {

  public form :FormGroup = this.fb.group({
    sujet :['',Validators.required],
    type : ['',Validators.required],
    description : ['',Validators.required],
    duree : ['',Validators.required],
    dateDebut : ['',Validators.required],
    dateFin : ['',Validators.required],
  });
  public error!:string;

  constructor(private fb:FormBuilder, private stageService: StageService, private router:Router, private location: Location) { }

  ngOnInit(): void {
  }

  public ajouter(){
    if (this.form.valid) {
      this.stageService.postStage(this.form.getRawValue()).subscribe(()=>{
        this.router.navigateByUrl('/stages');
      },
      
      (err)=>{
        this.error = err?.error || 'Une erreur est survenue.'
      })
    }
  }

  public goBack(){
    this.location.back();
  }

}
