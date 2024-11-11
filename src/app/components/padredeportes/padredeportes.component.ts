import { Component } from '@angular/core';

@Component({
  selector: 'app-padredeportes',
  templateUrl: './padredeportes.component.html',
  styleUrl: './padredeportes.component.css'
})
export class PadredeportesComponent {
  public deportes: Array<string>;
  public mensaje!: string;
  constructor(){
    this.deportes=["Petanca","Curling","Futbol","Dados"]
  }
  seleccionarFavoritoPadre(event: any):void{
    this.mensaje="Deporte favorito :"+event
    console.log("Dato: "+ event)
  }
}
