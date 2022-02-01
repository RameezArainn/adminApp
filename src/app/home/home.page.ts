import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  codeScanned=false;
  constructor() {}
scanQR(){
  if(!this.codeScanned){
    this.codeScanned=true;
  }
}
submit(){
  this.codeScanned=false;
}
}
