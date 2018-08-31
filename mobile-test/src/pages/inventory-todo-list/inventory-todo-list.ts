import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-inventory-todo-list',
  templateUrl: 'inventory-todo-list.html'
})

export class InventoryTodoListPage {

  // The initial root pages for our tabs (remove if not using tabs)
  tabUnassignedRoot: string = 'UnAssignedTodoListPage';
  tabAssignedRoot : string = 'AssignedTodoListPage';
  tabUnassigned : '';
  tabAssigned : '';

  constructor(public navCtrl: NavController, 
              public translateService: TranslateService, 
              public modalCtrl: ModalController) {
                
    translateService.get(['TAB_INVENTORY_TODO_LIST_UNASSIGNED', 'TAB_INVENTORY_TODO_LIST_ASSIGNED']).subscribe(values => {
      this.tabUnassigned = values['TAB_INVENTORY_TODO_LIST_UNASSIGNED'];
      this.tabAssigned = values['TAB_INVENTORY_TODO_LIST_ASSIGNED'];
    });
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * handle the search functionality
   */
  showSearch() {
    // this.navCtrl.push('TodoPickListPage', {
    //   inventoryTodo: inventoryTodo
    // });
  }
}
