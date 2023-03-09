import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ParteService } from 'src/app/services/parte.service';
import { Parte } from 'src/app/models/parte';

@Component({
  selector: 'app-partes',
  templateUrl: './partes.component.html',
  styleUrls: ['./partes.component.css'],
  providers:[ParteService]
})
export class PartesComponent implements OnInit{
  public titulo:string;
  public parte:Parte;
  public partes:Parte[];

  constructor(
    private _parteService:ParteService,
    private _router:Router,
    private _route:ActivatedRoute
  ){
    this.titulo="CREAR UN TIPO DE GASOLINA";
    this.parte=new Parte('','','','',0);
    this.partes=[];
  }
  ngOnInit(): void {
    this.obtenerPartes();
  }
  guardarParte(){
    this._parteService.postParte(this.parte).subscribe(
      response=>{
        console.log(response);
      },error=>{
        console.log(<any>error);
      }
    );
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
