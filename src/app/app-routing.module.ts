import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListPage } from './pages/client-list-page.component';
import { Filho1PageComponent } from './pages/filho1-page.component';
import { Filho2PageComponent } from './pages/filho2-page.component';
import { PaiComponent } from './pages/pai.component';
import { UserGuard } from './guards/user.guard';
import { LoginPageComponent } from './pages/login-page.component';
import { ClientDetalhePageComponent } from './pages/client-detalhe-page.component';
import { ListaPessoasPage } from './pages/lista-pessoas-page.component';
import { RxjsPageComponent } from './pages/rxjs-page.component';
import { UserPageComponent } from './pages/user-page.component';

const routes: Routes = [
  {path: 'client', component: ClientListPage, canActivate: [UserGuard]},
  {path: 'client/detalhe/:id', component: ClientDetalhePageComponent},
  {path: 'login', component: LoginPageComponent},
  {
    path: 'pai', 
    children: [
      {path: 'filho1', component: Filho1PageComponent},
      {path: 'filho2', component: Filho2PageComponent}
    ],
    component: PaiComponent
  },
  {path:'lista-pessoas', component: ListaPessoasPage},
  {path:'rxjs', component: RxjsPageComponent},
  {path:'user', component: UserPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
