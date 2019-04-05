import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { EmployeePerformanceComponent } from './employee-performance/employee-performance.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseReturnComponent } from './purchase-return/purchase-return.component';
import { ConnectionsComponent } from './connections/connections.component';
import { CompaintsComponent } from './compaints/compaints.component';
import { OfficePaymentsComponent } from './office-payments/office-payments.component';
import { OfficeExpencesComponent } from './office-expences/office-expences.component';
import { VendorPaymentsComponent } from './vendor-payments/vendor-payments.component';
import { AssetBalanceComponent } from './asset-balance/asset-balance.component';
import { AttendanceComponent } from './attendance/attendance.component';

@NgModule({
  declarations: [EmployeePerformanceComponent, PurchaseComponent, PurchaseReturnComponent, ConnectionsComponent, CompaintsComponent, OfficePaymentsComponent, OfficeExpencesComponent, VendorPaymentsComponent, AssetBalanceComponent, AttendanceComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
