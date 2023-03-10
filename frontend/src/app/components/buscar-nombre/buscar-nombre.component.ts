import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ParteService } from 'src/app/services/parte.service';
import { Parte } from 'src/app/models/parte';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-buscar-nombre',
  templateUrl: './buscar-nombre.component.html',
  styleUrls: ['./buscar-nombre.component.css'],
  providers:[ParteService]
})
export class BuscarNombreComponent implements OnInit{
  public titulo:string;
  public parte:Parte;
  public partes:Parte[];
  public nombre:String;
  public url:String;

  constructor(
    private _parteService:ParteService,
    private _router:Router,
    private _route:ActivatedRoute
  ){
    this.titulo="Busqueda";
    this.parte=new Parte('','','','',0,'');
    this.partes=[];
    this.nombre='';
    this.url=Global.url;
  }
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      this.nombre=params['nombre'];
      this.obtenerPartesPorNombre(this.nombre.toString());
    });
  }
  obtenerPartesPorNombre(nombre:string){
    this._parteService.getPartesPorNombre(nombre).subscribe(
      response=>{
        this.partes=response.result;
      },error=>{
        console.log(<any>error);
      }
    );
  }
}
