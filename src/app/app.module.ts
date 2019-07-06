import { HttpClientModule } from '@angular/common/http';
import { ModuloRoteamento } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';

import { SharedComponentModule } from './modules/shared-component/shared-component.module';

@NgModule({
  declarations: [
    AppComponent,
    CaixaDeEntradaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento,
    HttpClientModule,
    SharedComponentModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
