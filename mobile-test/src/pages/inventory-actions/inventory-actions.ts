import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { InventoryAction } from '../../models/inventory-action';
import { InventoryActions } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-inventory-action',
  templateUrl: 'inventory-actions.html'
})
export class InventoryActionsPage {
  currentInventoryActions: InventoryAction[];
  user = {
    email : "firstname.lastname@airline.com" 
  };

  constructor(public navCtrl: NavController, public inventoryActions: InventoryActions, public modalCtrl: ModalController) {
    this.currentInventoryActions = this.inventoryActions.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Navigate to the detail page for this item.
   */
  openInventoryAction(inventoryAction: InventoryAction) {
    this.navCtrl.push('InventoryTodoListPage');
  }
}
