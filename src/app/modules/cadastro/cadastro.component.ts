import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { PageDataService } from 'src/app/page-data.service';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styles: [
  ]
})
export class CadastroComponent implements OnInit {
  mensagemError = '';
  
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private pageData: PageDataService
  ) { }

  validaImagem(campoDoFormulario: FormControl){
    return this.httpClient
      .head(campoDoFormulario.value, {
        observe: 'response'
      })
      .pipe(
        map((response: HttpResponseBase) => {
          console.log(response)
          return response.ok ? null : { urlInvalida: true}
        }),
      catchError((error) => {
        return [{urlInvalida: true}]
      })
      )
  }

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]),
    avatar: new FormControl('', [Validators.required], this.validaImagem.bind(this)),
  })
  
  ngOnInit(): void {
    this.pageData.atualizaTitulo('Cadastro') 
  }


  validarTodosOsCamposDoFormulario(form: FormGroup){
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      control.markAsTouched({ onlySelf: true})
    })
  }

  handleCadastrarUsuario() {
    const userDto = new User(this.formCadastro.value);
    if(this.formCadastro.valid) {
      console.log(userDto)
      console.log(this.formCadastro.value);
      
      this.httpClient
      .post('http://localhost:3200/users', userDto)
      .subscribe(
        () => {
          this.formCadastro.reset();
          setTimeout(() => {
            this.router.navigate(['login'])
          }, 1000);
        },
        (response: HttpErrorResponse) => this.mensagemError = response.error.body
      )



      this.formCadastro.reset();
    } else {
      this.validarTodosOsCamposDoFormulario(this.formCadastro);
    }
  }

}
