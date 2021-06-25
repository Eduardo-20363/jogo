import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css'],
})
export class ComponentComponent implements OnInit {
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
