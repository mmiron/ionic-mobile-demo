import { Injectable } from '@angular/core';

import { InventoryAction } from '../../models/inventory-action';
import { Api } from '../api/api';

@Injectable()
export class InventoryActions {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/inventoryActions', params);
  }

}
