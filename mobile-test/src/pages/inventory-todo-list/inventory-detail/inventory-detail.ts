import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@IonicPage()
@Component({
  selector: 'page-inventory-detail',
  templateUrl: 'inventory-detail.html'
})
export class InventoryDetailPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, public barcodeScanner: BarcodeScanner) {
    this.item = navParams.get('todoPickList');
  }
  
  scanBarcode() {
    this.barcodeScanner.scan().then(barcodeData => {
     console.log('Barcode data', barcodeData);
    }).catch(err => {
        console.log('Error', err);
    });
  }
  
  skipItem() {
    
  }

}
