import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public user: any;
  public campo!: string;

  public title: string;
  public valor: boolean;

  constructor() {
    this.title = "Formulario";
    this.user = {
      nombre: "",
      apellidos: "",
      bio: "",
      genero: ""
    }
    this.valor = false;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("Si");
    console.log(this.user)
  }

  hasDadoClick(){
    alert("Has dado click")
  }

  hasSalido(){
    alert("Has salido")
  }

}
