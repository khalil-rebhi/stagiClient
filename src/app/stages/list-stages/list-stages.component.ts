import { Component, OnInit } from '@angular/core';
import { StageService } from 'src/app/core/services/stage.service';
import { Stage } from "../../core/model/stages";

@Component({
  selector: 'app-list-stages',
  templateUrl: './list-stages.component.html',
  styleUrls: ['./list-stages.component.css']
})
export class ListStagesComponent implements OnInit {

  public stages!:Stage[];

  constructor( private stageService: StageService) { }

  ngOnInit(): void {
    this.stageService.getStages().subscribe(result => this.stages= result);
  }

}
