import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPlansComponent } from './my-plans/my-plans.component';
import { PlanInfoComponent } from './plan-info/plan-info.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"",component:MyPlansComponent}
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
