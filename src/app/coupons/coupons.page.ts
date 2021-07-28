import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PopupPage } from '../popup/popup.page';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.page.html',
  styleUrls: ['./coupons.page.scss'],
})
export class CouponsPage implements OnInit {

   value = 0;
  


    constructor(private router:Router , private modalCtrl:ModalController ) { }
    navigate()
      {
        this.router.navigate(['/home']);
      }

    async edit(){
      this.modalCtrl.create({
        component:PopupPage,
        componentProps:{this:this.value}
      }).then(modalres => {modalres.present();
    });
  }



  ngOnInit() {
  } 

}
