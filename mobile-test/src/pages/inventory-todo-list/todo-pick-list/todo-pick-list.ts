import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-todo-pick-list',
  templateUrl: 'todo-pick-list.html'
})
export class TodoPickListPage {
  // currentInventoryActions: InventoryAction[];
  todoPickList : any = [];
  inventoryItem : any = {
    name : "DAL/DOCK-1"
  }

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    // this.currentInventoryActions = this.inventoryActions.query();
    this.todoPickList = [{
          "partNumber" : "65437-7",
          "serialNumber": "35476-7",
          "bin" : "19-A"
        },
        {
          "partNumber" : "88320-3",
          "serialNumber": "53233-6",
          "bin" : "21-A"
        },{
          "partNumber" : "53242-6",
          "serialNumber": "41343-2",
          "bin" : "22-A"
        }];
  }

  viewPickListItem(todoPickList : any) {
    this.navCtrl.push('InventoryTodoListPage');
  }
}
