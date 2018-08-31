import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { InventoryTodoListPage } from './inventory-todo-list';

@NgModule({
  declarations: [
    InventoryTodoListPage,
  ],
  imports: [
    IonicPageModule.forChild(InventoryTodoListPage),
    TranslateModule.forChild()
  ],
  exports: [
    InventoryTodoListPage
  ]
})
export class InventoryTodoListPageModule { }
