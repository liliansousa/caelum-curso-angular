// import { Email } from './../../models/email';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent {

  private _isNewEmailFormOpen = false;
  emailList = [];
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  };
  emailService: any;
  emailError: any;

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen;
  }

  handleNewEmail(formEmail: NgForm) {

    if (formEmail.invalid) { return; }

    this.emailService
      .enviar(this.email)
      .subscribe(
        emailApi => {
          this.emailList.push(emailApi);
          this.email = {
            destinatario: '',
            assunto: '',
            conteudo: ''
          };
          // formEmail.reset();
        }
        , (responseError: HttpErrorResponse) => {
          this.emailError = responseError.error;
          console.error('deu ruim' + responseError.error);
        }
      );

    // formEmail.reset();
  }
}
