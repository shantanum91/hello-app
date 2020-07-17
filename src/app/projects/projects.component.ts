import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = ['Voice based Intelligent Virtual Assistance for Windows', 'Predictive Analysis of Digital Agriculture',
    'Online book recommendation system using Collaborative filtering', 'Website Evaluation Using Opinion Mining'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
