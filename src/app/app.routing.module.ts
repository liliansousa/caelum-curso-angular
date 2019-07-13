import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CaixaDeEntradaComponent} from './modules/caixa-de-entrada/caixa-de-entrada.component';

const rotas: Routes = [
  { path: '', loadChildren: './modules/login/login.module#LoginModule'},
  {
    path: 'inbox',
    component: CaixaDeEntradaComponent,
    canActivate: [AuthGuard] // Adicionamos AuthGuard
  },
  {
    path: 'cadastro',
    loadChildren: './modules/cadastro/cadastro.module#CadastroModule'
  },
  { path: '**', redirectTo: 'inbox' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(rotas)
  ],
  exports: [ RouterModule ],
  providers: [ AuthGuard ] // Import como provider da rota
})

export class ModuloRoteamento {

}
