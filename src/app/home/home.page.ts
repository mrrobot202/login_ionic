import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario:string;
  contrasena: string;
  logincorrecto : boolean = false;
  constructor() {}

  login(){
    if (this.usuario == 'admin' && this.contrasena == 'admin') {
      console.log('iniciando sesion');
      this.logincorrecto = true;
    }else{
      console.error('Falló inicio de sesion');
    }
    // console.log('Usuario: '+ this.usuario );
    // console.log('pass:'+ this.contrasena);
  }
}
