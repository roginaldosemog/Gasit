import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';

import { ListaPage } from '../lista/lista';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
  }

  openPage() {
    this.navCtrl.setRoot(ListaPage);
  }

}