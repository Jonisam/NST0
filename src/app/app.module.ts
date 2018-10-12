import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { TarjetaPresentacionComponent } from './tarjeta-presentacion/tarjeta-presentacion.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormularioPersonaComponent } from './formulario-persona/formulario-persona.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioPersonaReactivoComponent } from './formulario-persona-reactivo/formulario-persona-reactivo.component';
import { TablePostComponentComponent } from './table-post-component/table-post-component.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmpresaComponent,
    TarjetaPresentacionComponent,
    FooterComponent,
    FormularioPersonaComponent,
    FormularioPersonaReactivoComponent,
    TablePostComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
