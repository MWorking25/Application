import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaryRoutingModule } from './salary-routing.module';
import { SalarySlipComponent } from './salary-slip/salary-slip.component';
import { IncreamentComponent } from './increament/increament.component';
import { AdvancePaymentComponent } from './advance-payment/advance-payment.component';
import { AdvanceReturnComponent } from './advance-return/advance-return.component';
import { LoanComponent } from './loan/loan.component';
import { LoanInstallmentsComponent } from './loan-installments/loan-installments.component';
import { EmployeeExpencesComponent } from './employee-expences/employee-expences.component';

@NgModule({
  declarations: [SalarySlipComponent, IncreamentComponent, AdvancePaymentComponent, AdvanceReturnComponent, LoanComponent, LoanInstallmentsComponent, EmployeeExpencesComponent],
  imports: [
    CommonModule,
    SalaryRoutingModule
  ]
})
export class SalaryModule { }
