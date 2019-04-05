import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { AttendanePunchComponent } from './attendane-punch/attendane-punch.component';

const routes: Routes = [
  {path:'',component:SignInComponent},
  {path:'attnedance_punch',component:AttendanePunchComponent},
  { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule { }
