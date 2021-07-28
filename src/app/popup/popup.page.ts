import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.page.html',
  styleUrls: ['./popup.page.scss'],
})
export class PopupPage implements OnInit {

  passedID1=null;
  constructor(private modalctrl:ModalController, private navParams:NavParams) { }
  
  close(){
    this.modalctrl.dismiss();
  }

  ngOnInit() {
    this.passedID1 = this.navParams.get('value');

  }
}
