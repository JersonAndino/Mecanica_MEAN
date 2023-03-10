import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearParteComponent } from './components/crear-parte/crear-parte.component';
import { PartesComponent } from './components/partes/partes.component';
import { DetalleParteComponent } from './components/detalle-parte/detalle-parte.component';
import { BuscarNombreComponent } from './components/buscar-nombre/buscar-nombre.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearParteComponent,
    PartesComponent,
    DetalleParteComponent,
    BuscarNombreComponent,
    ContactoComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
