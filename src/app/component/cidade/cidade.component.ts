import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css'],
})
export class CidadeComponent implements OnInit {
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
}
