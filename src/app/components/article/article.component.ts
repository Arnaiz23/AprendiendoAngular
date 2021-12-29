import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import { global } from 'src/app/services/global';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import swal from "sweetalert";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article!: Article;
  public url: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.url = global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params["id"];

      this._articleService.getArticle(id).subscribe(
        response => {
          if(response.article){
            this.article = response.article;
          }else{
            this._router.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );
    });

  }

  delete(id: any){
    swal({
      title: "¿Estas seguro?",
      text: "Una vez borrado, no podras recuperarlo",
      icon: "warning",
      buttons: [true, true],  //ambos botones, al haber 2, selecciono que quiero que salgan los 2
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this._articleService.delete(id).subscribe(
          response =>{
            swal("El articulo ha sido borrado", {
              icon: "success",
            });
            this._router.navigate(["/blog"]);
          },
          error =>{
            console.log(error);
            this._router.navigate(["/blog"]);
          }
        );
      } else {
        swal("Tu articulo esta a salvo");
      }
    });
  }
}
