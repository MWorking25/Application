import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetRoutingModule } from './asset-routing.module';
import { AssetMasterComponent } from './asset-master/asset-master.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseReturnComponent } from './purchase-return/purchase-return.component';
import { AssetAllocationComponent } from './asset-allocation/asset-allocation.component';
import { VendorsComponent } from './vendors/vendors.component';
import { VendorsPaymentComponent } from './vendors-payment/vendors-payment.component';

@NgModule({
  declarations: [AssetMasterComponent, PurchaseComponent, PurchaseReturnComponent, AssetAllocationComponent, VendorsComponent, VendorsPaymentComponent],
  imports: [
    CommonModule,
    AssetRoutingModule
  ]
})
export class AssetModule { }
