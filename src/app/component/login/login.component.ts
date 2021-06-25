import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  data: any;

  constructor(private servico: ServicesService, private router: Router) {}

  ngOnInit(): void {}

  login(username: string, password: string): void {
    this.servico.logIn(username, password).subscribe((response) => {
      this.data = response;
      localStorage.setItem('id', this.data.data);
      localStorage.setItem('usernameGame', username);
      localStorage.setItem('passwordGame', password);
      this.router.navigateByUrl('cidade');
      alert('Login feito');
    });
  }
}
