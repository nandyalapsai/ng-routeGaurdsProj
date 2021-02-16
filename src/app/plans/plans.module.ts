import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPlansComponent } from './my-plans/my-plans.component';
import { PlanInfoComponent } from './plan-info/plan-info.component';
import { Routes, RouterModule } from '@angular/router';

// {path:"plans",loadChildren: () => import('./plans/plans.module').then(m => m.PlansModule)}
const routes: Routes = [
  {path:"",component:MyPlansComponent,resolve:[],children:[
    {path:":id",component:PlanInfoComponent}
  ]}
];

@NgModule({
  declarations: [MyPlansComponent, PlanInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PlansModule { }
