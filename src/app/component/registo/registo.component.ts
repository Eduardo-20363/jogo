import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css'],
})
export class RegistoComponent implements OnInit {
  constructor(private servico: ServicesService, private router: Router) {}

  ngOnInit(): void {}

  signIn(username: string, password: string, passwordR: string) {
    if (password == passwordR) {
      this.servico.signIn(username, password).subscribe((data) => {
        console.log(data);
        this.router.navigateByUrl('nova-personagem');
      });
    } else {
      alert('Passwords Diferentes!');
    }
  }
}
