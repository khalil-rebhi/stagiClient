import { Component, Input, OnInit } from '@angular/core';
import { formation } from 'src/app/core/model/formation';

@Component({
  selector: 'app-card-formation',
  templateUrl: './card-formation.component.html',
  styleUrls: ['./card-formation.component.scss']
})
export class CardFormationComponent implements OnInit {
  @Input() formation:formation;
  constructor() { }

  ngOnInit(): void {
  }

}
