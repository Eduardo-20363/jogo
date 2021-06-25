import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  logado: any;

  constructor() {}

  ngOnInit(): void {
    this.verificaLogin();
  }

  logOut() {
    localStorage.removeItem('usernameGame');
    localStorage.removeItem('passwordGame');
    localStorage.removeItem('id');
  }
  //as vezes precisa dar f5 para verificar
  verificaLogin() {
    if (localStorage.getItem('usernameGame') === null) {
      this.logado = false;
    } else {
      this.logado = true;
    }
  }
}
