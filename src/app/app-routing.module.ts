import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeComponent } from './home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegistoComponent } from './component/registo/registo.component';
import { BatalhaComponent } from './component/batalha/batalha.component';
import { CidadeComponent } from './component/cidade/cidade.component';
import { NovaPersonagemComponent } from './component/nova-personagem/nova-personagem.component';
const routes: Routes = [
  { path: '', component: homeComponent },
  { path: 'home', component: homeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registo', component: RegistoComponent },
  { path: 'batalha', component: BatalhaComponent },
  { path: 'cidade', component: CidadeComponent },
  { path: 'nova-personagem', component: NovaPersonagemComponent },
  { path: '**', redirectTo: 'notFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
