import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { InventoryDetailPage } from './inventory-detail';

@NgModule({
  declarations: [
    InventoryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(InventoryDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    InventoryDetailPage
  ]
})
export class InventoryDetailPageModule { }
