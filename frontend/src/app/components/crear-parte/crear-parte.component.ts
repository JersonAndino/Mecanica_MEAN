import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ParteService } from 'src/app/services/parte.service';
import { CargarService } from 'src/app/services/cargar.service';
import { Parte } from 'src/app/models/parte';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-crear-parte',
  templateUrl: './crear-parte.component.html',
  styleUrls: ['./crear-parte.component.css'],
  providers:[ParteService, CargarService]
})
export class CrearParteComponent implements OnInit{
  public titulo:string;
  public parte:Parte;
  public url:string;
  public archivosParaCargar:Array<File>;
  @ViewChild('archivoImagen') fileInput:any;

  constructor(
    private _parteService:ParteService,
    private _cargarService:CargarService,
    private _router:Router,
    private _route:ActivatedRoute
  ){
    this.titulo="CREAR UNA PARTE";
    this.url=Global.url;
    this.parte=new Parte('','','','',0,'');
    this.archivosParaCargar=[];
  }
  ngOnInit(): void {
    //this.obtenerPartes();
  }
  guardarParte(form:NgForm){
    this._parteService.postParte(this.parte).subscribe(
      response=>{
        if(response.result){
          if(this.archivosParaCargar){
            this._cargarService.peticionRequest(this.url+'subir-imagen/'+response.result._id,[],this.archivosParaCargar,'imagen')
            .then((result:any)=>{
              console.log(result);
              //this.libroGuardar=result.response;
              //this.status='success';
              //console.log(result.response.result._id);
              //this.idGuardado=result.result._id;
              form.reset();
              this.fileInput.nativeElement.value='';
            });
          }else{
            console.log("No hay archivos para cargar");
          }
        }else{
          //
        }
      },error=>{
        console.log(<any>error);
      }
    );
  }
  obtenerPartes(){
    this._parteService.getPartes().subscribe(
      response=>{
        console.log(response);
      },error=>{
        console.log(<any>error);
      }
    );
  }
  imagenChangeEvent(archivoSeleccionado:any){
    this.archivosParaCargar=<Array<File>>archivoSeleccionado.target.files;
  }
}
