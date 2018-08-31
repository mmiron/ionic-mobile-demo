import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { AssignedTodoListPage } from './assigned-list';

@NgModule({
  declarations: [
    AssignedTodoListPage,
  ],
  imports: [
    IonicPageModule.forChild(AssignedTodoListPage),
    TranslateModule.forChild()
  ],
  exports: [
    AssignedTodoListPage
  ]
})
export class AssignedTodoListPageModule { }
