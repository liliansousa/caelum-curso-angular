import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { CadastroRoutingModule } from './cadastro-routing.module';


@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
