import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AsideComponent } from './shared/aside/aside.component';
import { HomeComponent } from './pages/home/home.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { ReferenciasComponent } from './pages/referencias/referencias.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

import { AppRoutingModule } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    HomeComponent,
    EducacionComponent,
    ExperienciaComponent,
    ReferenciasComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCbuiztgVyMsk6BwXgzH7KfmY3veU1QB5g'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
