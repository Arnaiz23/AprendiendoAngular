import { Component, OnInit } from '@angular/core';
// Sacar un dato de la url *
import {Router, ActivatedRoute, Params} from '@angular/router'; //*

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public title: string;
  public nombre: string;
  public apellidos: string;

  constructor(
    private _route: ActivatedRoute, //* Sacar parametros de una url
    private _router: Router //* Redireccionar a otras paginas
  ) { 
    this.title = "Pagina";
    this.nombre = "";
    this.apellidos = "";
  }

  ngOnInit(): void {

    // *
    this._route.params.subscribe((params: Params) => {
      this.nombre = params['nombre'];
      this.apellidos = params['apellidos'];
    });
    // *

  }

  // Redireccionar automaticamente
  redireccion(){
    // Para redireccionar a una pagina expecifica
    // this._router.navigate(['formulario']);
    // Para redireccionar con parametros en la url
    this._router.navigate(['pagina-de-pruebas', 'Adrian', 'Arnaiz']);
  }

}
