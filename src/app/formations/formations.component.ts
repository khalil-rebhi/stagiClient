import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormationsService } from '../core/services/formations.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  constructor(private router: Router, private formationService: FormationsService) { }

  ngOnInit(): void {
  }

  public clearAll(){
    this.formationService.clearAll().subscribe(() => {
      this.router.navigateByUrl('/formations');
    })
  }

}
