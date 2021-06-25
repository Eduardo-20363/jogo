import { isDefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-batalha',
  templateUrl: './batalha.component.html',
  styleUrls: ['./batalha.component.css'],
})
export class BatalhaComponent implements OnInit {
  constructor(private servico: ServicesService, private router: Router) {}
  isDead: boolean = false;
  player: any;
  oponente: any;
  ngOnInit(): void {
    this.verificaLogin();
    this.getCharById();
    this.getRandomChar();
  }

  verificaLogin() {
    if (this.servico.verificaLogin() == false) {
      this.router.navigateByUrl('/home');
      alert('Precisa estar logado!');
    }
  }

  getCharById() {
    this.servico.getCharById().subscribe((player) => {
      this.player = player.data.Personagens[0];
      console.log(this.player);
    });
  }

  getRandomChar() {
    this.servico.getRandomChar().subscribe((oponente) => {
      this.oponente = oponente.data;
      console.log(this.oponente);
    });
  }

  getRandomNumber() {
    return Math.random() * (10 - 1) + 1;
  }

  darDano() {
    let numeroRandom = this.getRandomNumber();

    if (numeroRandom >= 5) {
      this.oponente.Vida -= this.player.Atk;
    } else {
      this.player.Vida -= this.oponente.Atk;
    }
  }

  fight() {
    let interval = setInterval(() => {
      let numeroRandom = this.getRandomNumber();
      console.log(this.isDead);
      if (numeroRandom >= 4) {
        console.log('hit');
        this.darDano();
        if (this.oponente.Vida <= 0) {
          this.isDead = true;
          alert('Ganhou!');
        } else if (this.player.Vida <= 0) {
          this.isDead = true;
          alert('Perdeu!');
        }
      } else {
        console.log('fail');
      }
      if (this.isDead == true) {
        clearInterval(interval);
        setTimeout(() => {
          this.router.navigateByUrl('/cidade');
        }, 1000);
      }
    }, 1500);
  }
}
