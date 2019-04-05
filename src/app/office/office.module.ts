import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeRoutingModule } from './office-routing.module';
import { OfficeMasterComponent } from './office-master/office-master.component';
import { OfficePaymentsComponent } from './office-payments/office-payments.component';
import { OfficeExpencesComponent } from './office-expences/office-expences.component';

@NgModule({
  declarations: [OfficeMasterComponent, OfficePaymentsComponent, OfficeExpencesComponent],
  imports: [
    CommonModule,
    OfficeRoutingModule
  ]
})
export class OfficeModule { }
