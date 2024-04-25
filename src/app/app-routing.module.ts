import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListPage } from './pages/client-list-page.component';
import { Filho1PageComponent } from './pages/filho1-page.component';
import { Filho2PageComponent } from './pages/filho2-page.component';
import { PaiComponent } from './pages/pai.component';

const routes: Routes = [
  {path: 'client', component: ClientListPage},
  {
    path: 'pai', 
    children: [
      {path: 'filho1', component: Filho1PageComponent},
      {path: 'filho2', component: Filho2PageComponent}
    ],
    component: PaiComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
