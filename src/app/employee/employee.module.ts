import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeMasterComponent } from './employee-master/employee-master.component';
import { ShiftManagementComponent } from './shift-management/shift-management.component';
import { EmployeeReviewComponent } from './employee-review/employee-review.component';
import { EmployeeDocumentsComponent } from './employee-documents/employee-documents.component';

@NgModule({
  declarations: [EmployeeMasterComponent, ShiftManagementComponent, EmployeeReviewComponent, EmployeeDocumentsComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
