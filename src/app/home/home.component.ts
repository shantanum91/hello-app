import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAdmin = true;
  skills = ['C', 'C++', 'Java'];
  msg = 'type something';

  highlight = true;
  padVal = '20px';
  constructor() { }

  ngOnInit(): void {
  }

}
