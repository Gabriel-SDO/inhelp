import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil', url: '/perfil', icon: 'people' },
    { title: 'Cadastrar profissionais', url: '/cadastro-profissionais', icon: 'ellipse' },
    { title: 'Cadastrar usuários', url: '/cadastro-usuario', icon: 'ellipse' },
    { title: 'Contratações anteriores', url: '/contratacoes', icon: 'ellipse' },
    { title: 'Relatar erros', url: '/bugs', icon: 'help-circle' },
    { title: 'Sair', url: '/login', icon: 'arrow-back-circle' },
   
  ];
  public labels = [];
  constructor() {}
}
