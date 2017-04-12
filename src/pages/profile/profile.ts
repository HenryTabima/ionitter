import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { user } from '../../commons/user'
import { notification } from '../../commons/notification'

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  user:user = {
    "img": 'https://placeimg.com/400/400/people/12',
    "nick_name": '@mgilliam',
    "interactions": 1,
    "github": 'mgilliam',
    "twitter": 'mgilliam',
    "medium": 'mgilliam',
    "bio": 'Nacio el 5 de diciembre y tiene 26 años de edad'
  }

  notifications:Array<notification> = [
      {action: 'reply', img:'https://placeimg.com/150/150/people/4', nick_name:'@merlyn', text:'ionitter es lo mas'},
      {action: 'replatzitt', img:'https://placeimg.com/150/150/people/5', nick_name:'@quattrocchi', text:'que chulo que esta esta app en iOS'},
      {action: 'mention', img:'https://placeimg.com/150/150/people/6', nick_name:'@rosario', text:'Ya tu sabe como es'}
    ];

  constructor(public navCtrl: NavController) {

  }

}
