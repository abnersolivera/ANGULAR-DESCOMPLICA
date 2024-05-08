import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './components/components.module';
import { FormsModule } from '@angular/forms';
import { BindingPageComponent } from './pages/binding-page.component';
import { CustomUppercasePipe } from './pipes/custom-uppercase.pipe';
import { ClientService } from './services/client.service';
import { Filho1PageComponent } from './pages/filho1-page.component';
import { Filho2PageComponent } from './pages/filho2-page.component';
import { PaiComponent } from './pages/pai.component';
import { ClientListPage } from './pages/client-list-page.component';
import { LoginPageComponent } from './pages/login-page.component';
import { ClientDetalhePageComponent } from './pages/client-detalhe-page.component';
import { RxjsPageComponent } from './pages/rxjs-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaPessoasPage } from './pages/lista-pessoas-page.component';
import { UserPageComponent } from './pages/user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingPageComponent,
    CustomUppercasePipe,
    PaiComponent,
    Filho1PageComponent,
    Filho2PageComponent,
    ClientListPage,
    LoginPageComponent,
    ClientDetalhePageComponent,
    RxjsPageComponent,
    ListaPessoasPage,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
