import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private navCtrl: NavController) {
    let login=true
    if(!login){
      this.navCtrl.navigateRoot('/tabs');

    }
    else{
      this.navCtrl.navigateRoot('/register');

    }
  
  }
}
