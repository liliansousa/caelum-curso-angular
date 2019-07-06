import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent} from './cadastro.component';

const rotasCadastro: Routes = [
  { path: '', component: CadastroComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rotasCadastro)
  ],
  exports: [ RouterModule ]
})
export class CadastroRoutingModule { }
