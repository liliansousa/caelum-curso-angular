import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { CaixaDeEntradaComponent} from './modules/caixa-de-entrada/caixa-de-entrada.component';

const rotas: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inbox', component: CaixaDeEntradaComponent },
  { path: 'cadastro', loadChildren: './modules/cadastro/cadastro.module#CadastroModule'},
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
