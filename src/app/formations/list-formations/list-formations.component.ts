import { Component, OnInit } from '@angular/core';
import { formation } from 'src/app/core/model/formation';
import { FormationsService } from 'src/app/core/services/formations.service';

@Component({
  selector: 'app-list-formations',
  templateUrl: './list-formations.component.html',
  styleUrls: ['./list-formations.component.scss']
})
export class ListFormationsComponent implements OnInit {

  public formations:formation[];
  public selectedformation : formation;
  constructor(private formationService: FormationsService) { }

  ngOnInit(): void {
    this.formationService.getAllFormations()
    .subscribe(result => {
      this.formations = result;
      this.selectedformation = result[0];
    });

  }

  public show(formation: formation){
    this.selectedformation = formation;
    
  }

  public delete(formation : formation){
    let index = this.formations.indexOf(formation);
    this.formationService.deleteOneFormation(formation);
    this.formations.splice(index,1);
    this.selectedformation = this.formations[0];
  }
}
