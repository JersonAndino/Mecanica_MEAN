import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ParteService } from 'src/app/services/parte.service';
import { Parte } from 'src/app/models/parte';
import { CargarService } from 'src/app/services/cargar.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-partes',
  templateUrl: './partes.component.html',
  styleUrls: ['./partes.component.css'],
  providers:[ParteService,CargarService]
})
export class PartesComponent implements OnInit{
  public titulo:string;
  public partes:Parte[];
  public url:String;

  constructor(
    private _parteService:ParteService,
    private _cargarService:CargarService,
    private _router:Router,
    private _route:ActivatedRoute
  ){
    this.titulo="CREAR UN TIPO DE GASOLINA";
    this.partes=[];
    this.url=Global.url;
  }
  ngOnInit(): void {
    this.obtenerPartes();
  }
  obtenerPartes(){
    this._parteService.getPartes().subscribe(
      response=>{
        //console.log(response);
        this.partes=response.result;
      },error=>{
        console.log(<any>error);
      }
    );
  }
}

