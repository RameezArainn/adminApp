import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ServerService } from '../providers/server.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private navCtrl:NavController,private server:ServerService) { }

  ngOnInit() {
  }
  submit(){
    let data
    this.server.shopRegister(data).subscribe(res=>{
      console.log(res)
    },err=>{
      console.log(err,'errorrr')
    })
    // this.navCtrl.navigateRoot('/tabs')
  }
}
