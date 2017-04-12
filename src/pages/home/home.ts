import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { twitt } from '../../commons/twitt'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listado:Array<twitt> = [
    {img:'https://placeimg.com/150/150/people/1', nick_name:'@beaumont', text:'ionitter es lo mas'},
    {img:'https://placeimg.com/150/150/people/2', nick_name:'@agrippa', text:'que chulo que esta esta app en iOS'},
    {img:'https://placeimg.com/150/150/people/3', nick_name:'@gorecki', text:'Ya tu sabe como es'}
  ]

  constructor(public navCtrl: NavController) {

  }

}
