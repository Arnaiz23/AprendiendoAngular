import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Article } from "../models/article";

import { global } from "./global"; //Archivo donde he guardado el valor de la url comun siempre

@Injectable()
export class ArticleService{

    public url: string;

    constructor(
        private _http: HttpClient  //Cargar en app.module.ts el httpClientModule
    ){
        this.url = global.url;
    }

    pruebas(){
        return "Soy el servicio de articulos";
    }

    getArticles(last: any = null):Observable<any>{
        
        var articles = "articles";
        
        if(last != null){
            var articles = "articles/true";
        }

        return this._http.get(this.url+articles);
    }

    getArticle(articleId: any):Observable<any>{
        return this._http.get(this.url+"article/"+articleId);
    }
}