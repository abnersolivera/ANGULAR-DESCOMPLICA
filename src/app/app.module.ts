import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './components/components.module';
import { FormsModule } from '@angular/forms';
import { BindingPageComponent } from './pages/binding-page.component';
import { CustomUppercasePipe } from './pipes/custom-uppercase.pipe';
import { ClientService } from './services/client.service';

@NgModule({
  declarations: [
    AppComponent,
    BindingPageComponent,
    CustomUppercasePipe
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
