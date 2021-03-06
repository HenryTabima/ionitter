import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs'
import {
  AlertController,
  LoadingController,
  NavController
} from 'ionic-angular'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  user = { 'email': '', 'password': '' }

  constructor(
    private alertCtrl:AlertController,
    public loadingCtrl:LoadingController,
    public navCtrl:NavController
  ){

  }

  ngOnInit(){
    console.log('arranco el init')
  }

  login = ():void => {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    })
    if(this.user.email != '' && this.user.password != '') {
      loading.present()
      setTimeout(() => {
        loading.dismiss()
        this.navCtrl.push(TabsPage)
      },2000)
    }else {
      loading.dismiss()
      let alert = this.alertCtrl.create({
        title: 'Login',
        subTitle: 'Login incorrecto',
        buttons: ['Acpetar']
      })
      alert.present()
    }
  }

}
