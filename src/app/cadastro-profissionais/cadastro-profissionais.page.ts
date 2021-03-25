import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-profissionais',
  templateUrl: './cadastro-profissionais.page.html',
  styleUrls: ['./cadastro-profissionais.page.scss'],
})
export class CadastroProfissionaisPage implements OnInit {

  constructor(public navCtrl : NavController) { }

  ngOnInit() {
  }

  cadastrar(){
    this.navCtrl.navigateRoot('/home');
  }
}

