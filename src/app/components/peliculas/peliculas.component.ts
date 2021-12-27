import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]  //Para los servicios
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Array<Pelicula>;
  public favorita!: Pelicula;
  public fecha: any;

  // Los servicios siempre es _nombre
  constructor(private _peliculaService: PeliculaService) { 
    this.titulo = "Peliculas";
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2021, 11, 24);
  }

  ngOnInit(): void {
    // console.log(this.peliculas)
    console.log("Componente iniciado");
    console.log(this._peliculaService.holaMundo());
  }

  ngDoCheck(): void{
    console.log("Dockeck lanzado")
  }

  cambiarTitulo(){
    this.titulo = "Titulo cambiado";
  }

  ngOnDestroy(){
    console.log("EL COMPONENTE SE VA A ELIMINAR DE LA EJECUCION INSTANTANEA");
  }

  mostrarFavorita(event: any){
    this.favorita = event.pelicula;
  }

}
