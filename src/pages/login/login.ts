import { Component } from '@angular/core';
import { AlertController, LoadingController } from 'ionic-angular'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  user = { 'email': '', 'password': '' }

  constructor(private alertCtrl:AlertController, public loadingCtrl:LoadingController){

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
        let alert = this.alertCtrl.create({
          title: 'Login',
          subTitle: 'Login correcto',
          buttons: ['Acpetar']
        })
        alert.present()
      },5000)
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
