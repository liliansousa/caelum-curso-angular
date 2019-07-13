import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaixaDeEntradaComponent} from './modules/caixa-de-entrada/caixa-de-entrada.component';

const rotas: Routes = [
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule'},
  { path: 'inbox', component: CaixaDeEntradaComponent },
  { path: 'cadastro', loadChildren: './modules/cadastro/cadastro.module#CadastroModule'},
  { path: '', component: CaixaDeEntradaComponent },
  { path: '**', redirectTo: 'inbox' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(rotas)
  ],
  exports: [ RouterModule ]
})

export class ModuloRoteamento {

}
