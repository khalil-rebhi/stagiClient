import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/core/services/quiz.service';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.scss']
})
export class ListQuizComponent implements OnInit {
  public listDomaines :string[]=[];
  constructor(private domaineService:QuizService) { }

  ngOnInit(): void {
    this.domaineService.getQuizs().subscribe((responses)=>{
      this.listDomaines = responses;
      
    })
  }

}
