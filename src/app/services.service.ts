import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  criarPerfil = "http://moreiramoises.pt/server/apis/signup.php";

  criarPersonagem = "http://moreiramoises.pt/server/apis/createChart.php";

  criarArma = "http://moreiramoises.pt/server/apis/createArma.php";

  updateChar = "http://moreiramoises.pt/server/apis/updateChart.php";

  login = "http://moreiramoises.pt/server/apis/login.php";

  constructor(private http: HttpClient) {}

  registo(nome: any, password: any) {
    let enviar: FormData = new FormData();
    enviar.append('username', nome);
    enviar.append('password', password);
    return this.http.post(this.criarPerfil, enviar);
  }
  criarPerson(nome : any, atk : any, inteligencia : any, vida : any, password : any , username : any) {
    let enviar: FormData = new FormData();
    enviar.append('name', nome);
    enviar.append('atk', atk);
    enviar.append('isMonster', 'false');
    enviar.append('int', inteligencia);
    enviar.append('vida', vida);
    enviar.append('username', username);
    enviar.append('password', password);

    return this.http.post(this.criarPersonagem, enviar;
  }
  criaArma(nome, atk, durabilidade, vida) {
    let data: FormData = new FormData();
    data.append('name', nome);
    data.append('atk', atk);
    data.append('durabilidade', durabilidade);
    data.append('tipoDeArma', 'arma');
    data.append('vida', vida);
    data.append('username', 'lima_10');
    data.append('password', 'lima10');
    data.append('idPersonagem', '138');
    return this.http.post(this.criarArma, data);
  }
  updateChar(idPersonagem, nome, atk, intl,vida) {
    console.log(atk);
    let datToSend: FormData = new FormData();
    datToSend.append('idChar', idPersonagem);
    datToSend.append('name', nome);
    datToSend.append('atk', atk);
    datToSend.append('isMonster', 'false');
    datToSend.append('int', intl);
    datToSend.append('vida', vida);
    datToSend.append('username', 'Tobias');
    datToSend.append('password', '1234');

    return this.http.post(this.link4, datToSend);
  }

}

}
