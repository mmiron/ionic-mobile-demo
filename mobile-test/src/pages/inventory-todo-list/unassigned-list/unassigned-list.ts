import { Component } from '@angular/core';
import {App} from 'ionic-angular';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { InventoryTodo } from '../../../models/inventory-todo';
import { InventoryTodos } from '../../../providers';

@IonicPage()
@Component({
  selector: 'page-unassigned-list',
  templateUrl: 'unassigned-list.html'
})

export class UnAssignedTodoListPage {
  unassignedTodos: InventoryTodo[];

  constructor(public app : App, 
              public navCtrl: NavController, 
              public inventoryTodos: InventoryTodos, 
              public modalCtrl: ModalController) {
                
    this.unassignedTodos = this.inventoryTodos.query();
    this.unassignedTodos.forEach(function(todo) {
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
  openUnAssignedTodo(inventoryTodo: InventoryTodo) {
    this.navCtrl.parent.parent.push('TodoPickListPage', {
      inventoryTodo: inventoryTodo
    });
  }
}
