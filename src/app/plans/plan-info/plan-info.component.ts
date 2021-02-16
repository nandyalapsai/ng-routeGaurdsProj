import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plan-info',
  templateUrl: './plan-info.component.html',
  styleUrls: ['./plan-info.component.css']
})
export class PlanInfoComponent implements OnInit {
  id:any
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe(params=>{
        this.id = params.get("id")
      })
  }

  plans = [
    {name:"plan-399",info:"you can get 40MBPS speed "},
    {name:"plan-599",info:"you can get 100MBPS speed "},
    {name:"plan-999",info:"you can get 150MBPS speed "},
    {name:"plan-1024",info:"you can get 300MBPS speed "},
    {name:"your specail plan",info:"you can get a trail of 200MBPS speed"},
  ]

}
