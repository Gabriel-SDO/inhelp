import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contratacoes',
  templateUrl: './contratacoes.page.html',
  styleUrls: ['./contratacoes.page.scss'],
})
export class ContratacoesPage implements OnInit {

  constructor(public navCtrl : NavController) { }

  ngOnInit() {
  }

  perfil(){
    this.navCtrl.navigateRoot('/perfil');
  }
}
