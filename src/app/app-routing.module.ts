import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyPlansComponent } from './plans/my-plans/my-plans.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"plans",loadChildren: () => import('./plans/plans.module').then(m => m.PlansModule)},
  {path:"bill",loadChildren: () => import('./bills/bills.module').then(m => m.BillsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
