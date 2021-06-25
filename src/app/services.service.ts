import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  login = 'http://moreiramoises.pt/server/apis/login.php';
  signInLink = 'http://moreiramoises.pt/server/apis/signup.php';
  createChararacter = 'http://moreiramoises.pt/server/apis/createChart.php';
  characterId = 'http://moreiramoises.pt/server/apis/get/getChar.php?PlayerID=';
  randomCharacter =
    'http://moreiramoises.pt/server/apis/get/getRandomChar.php?';
  UpdateCharacter = 'http://moreiramoises.pt/server/apis/updateChart.php';
  CriarArma = 'http://moreiramoises.pt/server/apis/createArma.php';
  GetArmaPeloID =
    'http://moreiramoises.pt/server/apis/get/getArma.php?IDPersonagem=';

  constructor(private http: HttpClient) {}

  logIn(username: string, password: string) {
    let dataToSend: FormData = new FormData();

    dataToSend.append('username', username);
    dataToSend.append('password', password);

    localStorage.setItem('usernameGame', username);
    localStorage.setItem('passwordGame', password);

    return this.http.post(this.login, dataToSend);
  }

  verificaLogin() {
    if (localStorage.getItem('usernameGame') === null) {
      return false;
    } else {
      return true;
    }
  }

  //registar
  signIn(username: string, password: string) {
    let dataToSend: FormData = new FormData();

    dataToSend.append('username', username);
    dataToSend.append('password', password);

    return this.http.post(this.signInLink, dataToSend);
  }

  createChar(
    name: string,
    ataque: string,
    inteligencia: string,
    saude: string,
    username: string,
    password: string
  ) {
    const formData: FormData = new FormData();
    formData.append('name', name);
    formData.append('atk', ataque);
    formData.append('isMonster', 'false');
    formData.append('int', inteligencia);
    formData.append('vida', saude);
    formData.append('username', username);
    formData.append('password', password);

    return this.http.post(this.createChararacter, formData);
  }

  criaArma(nome: string, atk: string, durabilidade: string, vida: string) {
    let data: FormData = new FormData();
    data.append('name', nome);
    data.append('atk', atk);
    data.append('durabilidade', durabilidade);
    data.append('tipoDeArma', 'arma');
    data.append('vida', vida);
    data.append('username', 'lima_10');
    data.append('password', 'lima10');
    data.append('idPersonagem', '138');
    return this.http.post(this.CriarArma, data);
  }
  updateChar(idPersonagem: any, nome: any, atk: any, intl: any, vida: any) {
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

    return this.http.post(this.UpdateCharacter, datToSend);
  }

  getCharById(): Observable<any> {
    return this.http.get(this.characterId + localStorage.getItem('id'));
  }

  getRandomChar(): Observable<any> {
    return this.http.get(this.randomCharacter);
  }

  createWeapon(
    name: string,
    atk: string,
    durabilidade: string,
    tipoArma: string,
    vida: string
  ) {
    const formData: FormData = new FormData();
    formData.append('name', name);
    formData.append('atk', atk);
    formData.append('durabilidade', durabilidade);
    formData.append('tipoDeArma', tipoArma);
    formData.append('vida', vida);

    let user = localStorage.getItem('usernameGame');
    let pass = localStorage.getItem('passwordGame');
    let id = localStorage.getItem('id');

    formData.append('username', String(user));
    formData.append('password', String(pass));
    formData.append('idPersonagem', String(id));

    return this.http.post(this.CriarArma, formData);
  }

  treino(name: string, idChar: string, atk: string, int: string, vida: string) {
    const formData: FormData = new FormData();
    let ataque = parseInt(atk) + 1;
    let inteligencia = parseInt(int) + 1;
    let Vida = parseInt(vida) + 1;
    formData.append('name', name);
    formData.append('idChar', idChar);
    formData.append('atk', String(ataque));
    formData.append('isMonster', 'false');
    formData.append('int', String(inteligencia));
    formData.append('vida', String(Vida));
    let user = localStorage.getItem('usernameGame');
    let pass = localStorage.getItem('passwordGame');
    formData.append('username', String(user));
    formData.append('password', String(pass));
    return this.http.post(this.UpdateCharacter, formData);
  }
}
