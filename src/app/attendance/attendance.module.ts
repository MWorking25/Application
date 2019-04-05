import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';
import { AttendanceRegularizationComponent } from './attendance-regularization/attendance-regularization.component';
import { LeaveRequestsComponent } from './leave-requests/leave-requests.component';

@NgModule({
  declarations: [EmployeeAttendanceComponent, AttendanceRegularizationComponent, LeaveRequestsComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule
  ]
})
export class AttendanceModule { }
