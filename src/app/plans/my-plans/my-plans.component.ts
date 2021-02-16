import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-plans',
  templateUrl: './my-plans.component.html',
  styleUrls: ['./my-plans.component.css']
})
export class MyPlansComponent implements OnInit {

  constructor() { }

  plans = [
    {name:"plan-399",info:"you can get 40MBPS speed "},
    {name:"plan-599",info:"you can get 40MBPS speed "},
    {name:"plan-999",info:"you can get 40MBPS speed "},
    {name:"plan-1024",info:"you can get 40MBPS speed "},
    {name:"your specail plan",info:"you can get a trail of 200MBPS speed"},
  ]

  ngOnInit(): void {
  }

}
