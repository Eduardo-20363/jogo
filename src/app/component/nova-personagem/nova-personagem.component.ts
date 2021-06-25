import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-nova-personagem',
  templateUrl: './nova-personagem.component.html',
  styleUrls: ['./nova-personagem.component.css'],
})
export class NovaPersonagemComponent implements OnInit {
  constructor(private servico: ServicesService, private router: Router) {}

  ngOnInit(): void {}

  createChar(
    name: string,
    ataque: string,
    inteligencia: string,
    saude: string,
    username: string,
    password: string
  ) {
    this.servico
      .createChar(name, ataque, inteligencia, saude, username, password)
      .subscribe((data) => {
        console.log(data);
        alert('Criado Com Sucesso!');
        this.router.navigateByUrl('/home'); //redireciona para a homepage
      });
  }
}
