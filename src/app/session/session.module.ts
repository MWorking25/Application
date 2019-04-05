import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { AttendanePunchComponent } from './attendane-punch/attendane-punch.component';

@NgModule({
  declarations: [SignInComponent, AttendanePunchComponent],
  imports: [
    CommonModule,
    SessionRoutingModule
  ]
})
export class SessionModule { }
