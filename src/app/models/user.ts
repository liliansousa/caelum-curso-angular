export class User {
    name = '';
    password = '';
    username = '';
    phone = '';
    avatar = '';

    constructor({nome, senha, username, telefone, avatar}){
        this.name = nome;
        this.password = senha;
        this.username = username;
        this.phone = telefone;
        this.avatar = avatar;
    }
}