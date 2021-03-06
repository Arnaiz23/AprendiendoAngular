import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { global } from 'src/app/services/global';
import swal from 'sweetalert'; //Alertas

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article;
  public status!: string;
  public page_title: string;

  public is_edit!: boolean;
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
    this.page_title = "Crear articulo";

    // this.url = global.url;
  }

  ngOnInit(): void {
  }

  onSubmit() {

    this._articleService.create(this.article).subscribe(
      response => {
        if (response.status == "success") {
          this.status = "success";
          this.article = response.article;

          // Alerta. Hay que editar el fichero de ese modulo y quitar la declaracion que da error
          swal(
            "Articulo creado!!",
            "El articulo se ha creado correctamente",
            "success"
          );

          this._router.navigate(["/blog"]);
          // console.log(this.article)
        } else {
          this.status = "error";
        }
      },
      error => {
        console.log(error);
        this.status = error;
      }
    )
  }

  imageUpload(data:any){
    let image_data = data.body;
    this.article.image = image_data.image;
  }
}
