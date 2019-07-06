import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup ({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]),
    username: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    avatar: new FormControl('', [Validators.required], this.ValidaImagem.bind(this))
    // o método bind() está passando o campo como parâmetro através do this do contexto de execução deste código.
  });

// tslint:disable-next-line: no-shadowed-variable
  constructor(private HttpClient: HttpClient, private roteador: Router) { }

  ngOnInit() {
  }

  ValidaImagem(campoDoFormulario: FormControl) {
    return this.HttpClient.head(campoDoFormulario.value, {
      observe: 'response'
    }).pipe(
      map((response: HttpResponseBase) => {
        return response.ok ? null : { urlInvalida: true };
      }),
      catchError((error) => {
        return [{ urlInvalida: true }];
      })
    );
  }
  handleCadastrarUsuario() {
    if (this.formCadastro.valid) {

      const userData = new User(this.formCadastro.value);

      this.HttpClient.post('http://localhost:3200/users', userData)
      .subscribe(
        () => {
          console.log('Cadastrado com sucesso');
          this.formCadastro.reset();

          // após 1 seg, redireciona para a rota de login
          setTimeout(() => {
            this.roteador.navigate(['']);
          }, 1000);
        }, erro => console.error(erro)
      );
    } else {
      this.validarTodosOsCamposDoFormulario(this.formCadastro);
    }
  }

  validarTodosOsCamposDoFormulario(form: FormGroup) {

    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

}
