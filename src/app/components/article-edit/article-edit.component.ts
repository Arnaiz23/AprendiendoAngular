import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { global } from 'src/app/services/global';
import swal from 'sweetalert'; //Alertas

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',  //Para reutilizar
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public article: Article;
  public status!: string;
  public is_edit: boolean;
  public page_title: string;

  public url!: string;

  afuConfig = {
    multiple: false, //Si permito subir muchos
    formatsAllowed: ".jpg,.png, .gif, .jpeg", //formatos permitidos
    maxSize: 50, //Tamaño maximo MG
    uploadAPI: {
      url: global.url+"upload-image",  //url donde lo guardaras
    },
    theme: "attachPin",  //formulario mas basico posible
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    autoUpload: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para el articulo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = new Article("", "", "", null, "");
    this.is_edit = true;
    this.page_title = "Editar articulo";

    this.url = global.url;
  }

  ngOnInit(): void {
    this.getArticle();
  }

  onSubmit() {
    let id = this.article._id;
    this._articleService.update(this.article._id, this.article).subscribe(
      response => {
        if (response.status == "success") {
          this.status = "success";
          this.article = response.article;

          // Alerta
          swal(
            "Articulo editado!!",
            "El articulo se ha editado correctamente",
            "success"
          );
          
          this._router.navigate(["/blog/article", id]);
          // console.log(this.article)
        } else {
          this.status = "error";
        }
      },
      error => {
        console.log(error);
        this.status = error;
        swal(
          "Edicion fallida!!",
          "El articulo no se ha editado correctamente",
          "error"
        );
      }
    )
  }

  imageUpload(data:any){
    let image_data = data.body;
    this.article.image = image_data.image;
  }

  getArticle(){
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

}
