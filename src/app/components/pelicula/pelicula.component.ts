import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula!: Pelicula;
  // Crear un evento para el padre
  // Pasar datos de una pelicula al padre
  @Output() MarcarFavorita = new EventEmitter;

  constructor() { 
    // this.pelicula = ;
  }

  ngOnInit(): void {
  }

  seleccionar(event: any, pelicula: any){
    this.MarcarFavorita.emit({
      pelicula: pelicula
    });
  }

}
