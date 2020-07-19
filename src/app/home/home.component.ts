import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  serverText = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((res: any) => {
      console.log(res);
      this.serverText = res.title;
    });
  }

}
