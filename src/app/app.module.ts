import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './components/components.module';
import { FormsModule } from '@angular/forms';
import { BindingPageComponent } from './pages/binding-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingPageComponent
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
