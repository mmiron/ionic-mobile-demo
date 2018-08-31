import { Injectable } from '@angular/core';

import { InventoryAction } from '../../models/inventory-action';

@Injectable()
export class InventoryActions {
  inventoryActions: InventoryAction[] = [];

  defaultInventoryAction: any = {
    "name": "Pick inventory",
    "icon": "assets/img/inventory-actions/pick.png"
  };


  constructor() {
    let inventoryActions = [
      {
        "name": "Pick Inventory",
        "icon": "assets/img/inventory-actions/pick.png"
      },
      {
        "name": "Count inventory",
        "icon": "assets/img/inventory-actions/count.png"
      },
      {
        "name": "Put away inventory",
        "icon": "assets/img/inventory-actions/put-away.png"
      },
      {
        "name": "Transfer inventory",
        "icon": "assets/img/inventory-actions/transfer.png"
      }
    ];

    for (let inventoryAction of inventoryActions) {
      this.inventoryActions.push(new InventoryAction(inventoryAction));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.inventoryActions;
    }

    return this.inventoryActions.filter((inventoryAction) => {
      for (let key in params) {
        let field = inventoryAction[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return inventoryAction;
        } else if (field == params[key]) {
          return inventoryAction;
        }
      }
      return null;
    });
  }
}
