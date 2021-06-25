import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreinoComponent } from './component/treino/treino.component';
import { ComponentComponent } from './component/component.component';
import { LoginComponent } from './component/login/login.component';
import { BatalhaComponent } from './component/batalha/batalha.component';
import { homeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RegistoComponent } from './component/registo/registo.component';
import { CidadeComponent } from './component/cidade/cidade.component';
import { NovaArmaComponent } from './component/nova-arma/nova-arma.component';
import { NovaPersonagemComponent } from './component/nova-personagem/nova-personagem.component';
import { Four0fourComponent } from './component/four0four/four0four.component';

@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    TreinoComponent,
    ComponentComponent,
    LoginComponent,
    BatalhaComponent,
    NavBarComponent,
    RegistoComponent,
    CidadeComponent,
    NovaArmaComponent,
    NovaPersonagemComponent,
    Four0fourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
