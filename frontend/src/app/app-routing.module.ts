import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearParteComponent } from './components/crear-parte/crear-parte.component';
import { PartesComponent } from './components/partes/partes.component';
import { DetalleParteComponent } from './components/detalle-parte/detalle-parte.component';
import { BuscarNombreComponent } from './components/buscar-nombre/buscar-nombre.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'crear-parte',component:CrearParteComponent},
  {path:'partes',component:PartesComponent},
  {path:'partes/:id',component:DetalleParteComponent},
  {path:'partes-buscar/:nombre',component:BuscarNombreComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'**',component:PartesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
