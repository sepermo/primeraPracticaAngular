import {Component} from '@angular/core';

@Component({
    selector : `app-contador`,
    template:`
        <h1>{{titulo}}</h1>
        <h3>la base es: <strong> {{base}} </strong></h3>

        <button (click)="acumular(base)"> + {{base}}</button>

        <span>  {{numero}}  </span>

        <button (click)="acumular(base * (-1))"> - {{base}}</button>

    
    `
})
export class contadorComponent{
    titulo: string = 'Contador';
    numero: number = 0;
    base  : number = 1;
  
  acumular(base : number){
    this.numero+= base;
  }
}