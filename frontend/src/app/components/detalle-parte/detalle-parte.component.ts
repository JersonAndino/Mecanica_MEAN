import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ParteService } from 'src/app/services/parte.service';
import { CargarService } from 'src/app/services/cargar.service';
import { Parte } from 'src/app/models/parte';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-detalle-parte',
  templateUrl: './detalle-parte.component.html',
  styleUrls: ['./detalle-parte.component.css'],
  providers:[ParteService, CargarService]
})
export class DetalleParteComponent implements OnInit{
  public titulo:string;
  public parte:Parte;
  public partes:Parte[];
  public url:string;
  
  public archivosParaCargar:Array<File>;
  @ViewChild('archivoImagen') fileInput:any;

  constructor(
    private _parteService:ParteService,
    private _cargarService:CargarService,
    private _router:Router,
    private _route:ActivatedRoute
  ){
    this.titulo="DETALLES DE PARTE";
    this.parte=new Parte('','','','',0,'');
    this.partes=[];
    this.url=Global.url;
    this.archivosParaCargar=[];

  }
  ngOnInit(): void {
    this.obtenerPartes();
    this._route.params.subscribe(params=>{
      let id=params['id'];
      this.obtenerPartePorId(id);
    });
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
        this.partes=response.result;
      },error=>{
        console.log(<any>error);
      }
    );
  }
  obtenerPartePorId(id:String){
    this._parteService.getPartePorId(id).subscribe(
      response=>{
        this.parte=response.result;
      },error=>{
        console.log(<any>error);
      }
    );
  }
  actualizarPartePorId(form:NgForm){
    this._parteService.putPartePorId(this.parte).subscribe(
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
  eliminarPartePorId(){
    this._parteService.deletePartePorId(this.parte._id).subscribe(
      response=>{
        //console.log(response);
        this._router.navigate(['/partes']);
      },error=>{
        console.log(<any>error);
      }
    );
  }
  imagenChangeEvent(archivoSeleccionado:any){
    this.archivosParaCargar=<Array<File>>archivoSeleccionado.target.files;
  }
}

