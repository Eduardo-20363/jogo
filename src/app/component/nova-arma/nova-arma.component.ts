import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-nova-arma',
  templateUrl: './nova-arma.component.html',
  styleUrls: ['./nova-arma.component.css'],
})
export class NovaArmaComponent implements OnInit {
  constructor(private servico: ServicesService, private router: Router) {}

  ngOnInit(): void {
    this.verificaLogin();
  }

  verificaLogin() {
    if (this.servico.verificaLogin() == false) {
      this.router.navigateByUrl('/home');
      alert('Precisa estar logado!');
    }
  }

  criarArma(
    name: string,
    atk: string,
    durabilidade: string,
    tipoArma: string,
    vida: string
  ) {
    this.servico
      .createWeapon(name, atk, durabilidade, tipoArma, vida)
      .subscribe((data) => console.log(data));
  }
}
