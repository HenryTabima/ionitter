import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { notification } from '../../commons/notification'

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

  notifications:Array<notification> = [
      {action: 'reply', img:'https://placeimg.com/150/150/people/4', nick_name:'@merlyn', text:'ionitter es lo mas'},
      {action: 'replatzitt', img:'https://placeimg.com/150/150/people/5', nick_name:'@quattrocchi', text:'que chulo que esta esta app en iOS'},
      {action: 'mention', img:'https://placeimg.com/150/150/people/6', nick_name:'@rosario', text:'Ya tu sabe como es'}
    ];

  constructor(public navCtrl: NavController) {

  }

}
