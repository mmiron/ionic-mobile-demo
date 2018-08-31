import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { UnAssignedTodoListPage } from './unassigned-list';

@NgModule({
  declarations: [
    UnAssignedTodoListPage,
  ],
  imports: [
    IonicPageModule.forChild(UnAssignedTodoListPage),
    TranslateModule.forChild()
  ],
  exports: [
    UnAssignedTodoListPage
  ]
})
export class UnAssignedListPageModule { }
