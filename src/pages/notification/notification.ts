import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Notification } from '../../commons/notification'
import { VerNotificationPage } from './verNotification'

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

  notifications:Array<Notification> = [
      {action: 'reply', img:'https://placeimg.com/150/150/people/4', nick_name:'@merlyn', text:'ionitter es lo mas'},
      {action: 'replatzitt', img:'https://placeimg.com/150/150/people/5', nick_name:'@quattrocchi', text:'que chulo que esta esta app en iOS'},
      {action: 'mention', img:'https://placeimg.com/150/150/people/6', nick_name:'@rosario', text:'Ya tu sabe como es'}
    ];

  constructor(public navCtrl: NavController) {

  }

  verNotification(_notification:Notification){
    this.navCtrl.push(VerNotificationPage, {
      id:_notification
    })
  }

}
