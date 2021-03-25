import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCtrl : NavController) { }

  ngOnInit() {
  }

  logar(){
    this.navCtrl.navigateRoot('/home');
  }

  cadastrar(){
    this.navCtrl.navigateRoot('/cadastro-profissionais');
  }
  caduser(){
    this.navCtrl.navigateRoot('/cadastro-usuario');
  }
  
}
