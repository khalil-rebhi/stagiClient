import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StageService } from '../core/services/stage.service';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent implements OnInit {

  constructor(private stageService: StageService, private router: Router) { }

  ngOnInit(): void {
  }

  public clearAll(){
    this.stageService.clearAll().subscribe(() => {
      this.router.navigateByUrl('/stages');
    });

  }

}
