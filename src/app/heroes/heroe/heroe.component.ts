import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = `ironman`;
    superPoder: string = `super genio millonario, filantropo y playboy`;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }
    obtenerNombre():string{
        return`${this.nombre} - ${this.superPoder}`;
    }

    cambiarNombre(){
        this.nombre = `spiderman`;
    }

    cambiarSuperPoder(){
        this.superPoder = `poderes aracnidos y esta pobre`;
    }

}