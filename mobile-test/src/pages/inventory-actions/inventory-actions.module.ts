import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { InventoryActionsPage } from './inventory-actions';

@NgModule({
  declarations: [
    InventoryActionsPage,
  ],
  imports: [
    IonicPageModule.forChild(InventoryActionsPage),
    TranslateModule.forChild()
  ],
  exports: [
    InventoryActionsPage
  ]
})
export class InventoryActionsPageModule { }
