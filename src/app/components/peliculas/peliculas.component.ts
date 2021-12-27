import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Array<Pelicula>;
  public favorita!: Pelicula;
  public fecha: any;

  constructor() { 
    this.titulo = "Peliculas";
    this.peliculas = [
      new Pelicula("Spiderman 4", 2021, "https://i0.wp.com/radioformulaqr.com/wp-content/uploads/2021/10/spiderman-no-way-home-cuando-se-estrenara-el-segundo-trailer.jpg?fit=1080%2C601&ssl=1"),
      new Pelicula("Vengadores Endgame" , 2020, "https://i0.wp.com/hipertextual.com/wp-content/uploads/2019/04/hipertextual-nuevo-trailer-avengers-endgame-agradece-fans-universo-marvel-2019351167.jpg?fit=1200%2C675&ssl=1"),
      new Pelicula("Batman vs Superman", 2019, "https://www.ecestaticos.com/imagestatic/clipping/c81/cc8/c81cc8dd808a2deb28239b758bd9cdd2/batman-vs-superman-por-que-hay-que-acabar-de-una-vez-con-los-superheroes.jpg?mtime=1622844159")
    ];
    this.fecha = new Date(2021, 11, 24);
  }

  ngOnInit(): void {
    console.log(this.peliculas)
    console.log("Componente iniciado")
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
