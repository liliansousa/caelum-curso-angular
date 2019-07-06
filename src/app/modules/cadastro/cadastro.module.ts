import { CmailFormModule } from './../cmail-form/cmail-form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroComponent } from './../../modules/cadastro/cadastro.component';
import { CadastroRoutingModule } from './cadastro-routing.module';

import { SharedComponentModule } from './../../modules/shared-component/shared-component.module';



@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    SharedComponentModule,
    CmailFormModule,
    ReactiveFormsModule,
    CadastroRoutingModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
