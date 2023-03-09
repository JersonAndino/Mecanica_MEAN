import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { Subject } from 'rxjs';

import { Parte } from '../models/parte';

@Injectable()
export class ParteService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    }
    postParte(parte:Parte):Observable<any>{
        let params=JSON.stringify(parte);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'parte',params,{headers:headers});
    }
    getPartesPorMarca(marca:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'parteM/'+marca,{headers:headers});
    }
    getPartesPorNombre(nombre:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'parteN/'+nombre,{headers:headers});
    }
    getPartes():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'parte',{headers:headers});
    }
    deletePartePorId(id:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'parte/'+id,{headers:headers});
    }
    putPartePorId(parte:Parte):Observable<any>{
        let params=JSON.stringify(parte);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'parte',params,{headers:headers});
    }
}