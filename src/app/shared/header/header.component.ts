import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { User } from 'src/app/core/model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() public isLoggedin!:boolean |null;
  @Output() public logout : EventEmitter<true> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
