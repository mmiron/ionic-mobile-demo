/**
 * A generic model that our Inventory Todo pages list, create, and delete.
 *
 * The InventoryTodos service manages creating instances of InventoryTodo
 */
export class InventoryTodo {

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface InventoryTodo {
  [prop: string]: any;
}