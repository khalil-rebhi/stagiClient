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
  public selectedStage: Stage;

  constructor( private stageService: StageService) { }

  ngOnInit(): void {
    this.stageService.getStages().subscribe(result => {
      this.stages= result;
      this.selectedStage = result[0];
    });      
  }

  public delete(stage: Stage){
    this.stageService.deleteStage(stage);
    let index = this.stages.indexOf(stage);
    this.stages.splice(index,1);
    this.selectedStage = this.stages[0];
  }

  public show(stage:Stage){
    this.selectedStage = stage;
  }

}
