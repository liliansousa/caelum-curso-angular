import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    avatar: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

  handleCadastrarUsuario() {
    if(this.formCadastro.valid){
      console.log(this.formCadastro.value);
    } else {
      //console.log('Campos precisam ser preenchidos!');
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
