import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';

import { InventoryTodo } from '../../../models/inventory-todo';

@IonicPage()
@Component({
  selector: 'page-todo-pick-list',
  templateUrl: 'todo-pick-list.html'
})
export class TodoPickListPage {
  selectedInventoryTodo : InventoryTodo
  todoPickList : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedInventoryTodo = this.navParams.get("inventoryTodo");
  }

  viewPickListItem(todoPickList : any) {
    this.navCtrl.push('InventoryDetailPage', {
      todoPickList : todoPickList
    });
  }
}
