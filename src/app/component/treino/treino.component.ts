import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-treino',
  templateUrl: './treino.component.html',
  styleUrls: ['./treino.component.css'],
})
export class TreinoComponent implements OnInit {
  player: any;

  constructor(private servico: ServicesService, private router: Router) {}

  ngOnInit(): void {
    this.verificaLogin();
    this.getCharById();
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

  treinar() {
    this.servico
      .treino(
        this.player.Nome,
        this.player.ID,
        this.player.Atk,
        this.player.Int,
        this.player.Vida
      )
      .subscribe((data) => alert('Treinado!!'));
  }
}
