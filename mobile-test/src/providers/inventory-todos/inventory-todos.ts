import { Injectable } from '@angular/core';

import { InventoryTodo } from '../../models/inventory-todo';
import { Api } from '../api/api';

@Injectable()
export class InventoryTodos {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/inventoryTodos', params);
  }

}
