import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-inventory-detail',
  templateUrl: 'inventory-detail.html'
})
export class InventoryDetailPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.item = navParams.get('todoPickList');
  }

}
