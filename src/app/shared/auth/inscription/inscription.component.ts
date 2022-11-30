import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  public form:FormGroup = this.fb.group({
    fullname:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required]
  })

  public error!:string;
  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  public register(){
    if(this.form.valid){
      this.authService.inscription(this.form.getRawValue()).subscribe(()=>{
        this.router.navigateByUrl('/connexion');
      },
      
      (err)=>{
        this.error = err?.error || 'Une erreur est survenue.'
      })
    }
    console.log(this.form.getRawValue());
    
  }

}
