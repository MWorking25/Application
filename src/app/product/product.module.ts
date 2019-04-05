import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ConnectionComponent } from './connection/connection.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { NewEnquiryComponent } from './new-enquiry/new-enquiry.component';
import { ProductMasterComponent } from './product-master/product-master.component';
import { CustomerMasterComponent } from './customer-master/customer-master.component';

@NgModule({
  declarations: [ConnectionComponent, ComplaintsComponent, NewEnquiryComponent, ProductMasterComponent, CustomerMasterComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
