import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'fav-comp',
  templateUrl: 'fav.html'
})
export class Fav{
  @Input() id: number;

  @Output() onFav = new EventEmitter<string>()

  test = ''
  icon = 'ios-heart-outline'

  alert(){
    if(this.test == ''){
      this.test = 'primary'
      this.icon = 'ios-heart'
    }else{
      this.test = ''
      this.icon = 'ios-heart-outline'
    }
    this.onFav.emit('Gracias por hacer fav')
  }

}
