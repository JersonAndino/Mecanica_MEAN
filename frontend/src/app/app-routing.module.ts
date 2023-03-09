import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearParteComponent } from './components/crear-parte/crear-parte.component';
import { PartesComponent } from './components/partes/partes.component';
import { DetalleParteComponent } from './components/detalle-parte/detalle-parte.component';
const routes: Routes = [
  {path:'crear-parte',component:CrearParteComponent},
  {path:'partes',component:PartesComponent},
  {path:'partes/:id',component:DetalleParteComponent},
  {path:'**',component:PartesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
