import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { TodoPickListPage } from './todo-pick-list';

@NgModule({
  declarations: [
    TodoPickListPage,
  ],
  imports: [
    IonicPageModule.forChild(TodoPickListPage),
    TranslateModule.forChild()
  ],
  exports: [
    TodoPickListPage
  ]
})
export class TodoPickListPageModule { }
