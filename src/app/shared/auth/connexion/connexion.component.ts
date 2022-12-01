import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  public form : FormGroup = this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  });
  public error!: string;
  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  public submit(){
    if(this.form.valid){
      this.authService.connexion(this.form.getRawValue()).subscribe(()=>{

      this.router.navigateByUrl('/profile')
      },
      
      (err)=>{
        this.error = err?.error || "Mauvais mot passe ou email";
      })
    } 
  }

}
