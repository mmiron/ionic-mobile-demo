/**
 * A generic model that our Inventory Actions pages list, create, and delete.
 *
 * The InventoryActios service manages creating instances of InventoryAction
 */
export class InventoryAction {

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface InventoryAction {
  [prop: string]: any;
}