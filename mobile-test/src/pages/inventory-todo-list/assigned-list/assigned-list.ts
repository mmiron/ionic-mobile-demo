import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { InventoryTodo } from '../../../models/inventory-todo';
import { InventoryTodos } from '../../../providers';

@IonicPage()
@Component({
  selector: 'page-assigned-list',
  templateUrl: 'assigned-list.html'
})

export class AssignedTodoListPage {
  assignedTodos: InventoryTodo[];

  constructor(public navCtrl: NavController, public inventoryTodos: InventoryTodos, public modalCtrl: ModalController) {
    this.assignedTodos = this.inventoryTodos.query();
    this.assignedTodos.forEach(function(todo) {
      return todo.className = `todo-circle-${todo.iconColor}`;
    });
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Navigate to the detail page for this item.
   */
  openTodo(inventoryTodo: InventoryTodo) {
    this.navCtrl.push('TodoPickListPage', {
      inventoryTodo: inventoryTodo
    });
  }
}
