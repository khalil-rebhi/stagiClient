import { Component, OnInit } from '@angular/core';
import { formation } from 'src/app/core/model/formation';
import { FormationsService } from 'src/app/core/services/formations.service';

@Component({
  selector: 'app-user-list-formations',
  templateUrl: './user-list-formations.component.html',
  styleUrls: ['./user-list-formations.component.scss']
})
export class UserListFormationsComponent implements OnInit {
  public formations:formation[];
  constructor(private formationService: FormationsService) { }

  ngOnInit(): void {
    this.formationService.getAllFormations()
    .subscribe(result => {
      this.formations = result;
      console.log(this.formations)
  })

}
}
