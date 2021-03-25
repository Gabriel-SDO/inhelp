import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {

  constructor(public navCtrl : NavController) { }

  ngOnInit() {
  }

  cadastrar(){
    this.navCtrl.navigateRoot('/home');
  }
}
