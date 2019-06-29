import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { CaixaDeEntradaComponent} from './modules/caixa-de-entrada/caixa-de-entrada.component';

const rotas: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inbox', component: CaixaDeEntradaComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: '**', redirectTo: 'inbox' }
];

export const ModuloRoteamento = RouterModule.forRoot(rotas);
