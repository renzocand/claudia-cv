import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AsideComponent } from './shared/aside/aside.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoaderComponent } from './components/loader/loader.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { ReferenciasComponent } from './pages/referencias/referencias.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

import { AppRoutingModule } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    FooterComponent,
    HomeComponent,
    LoaderComponent,
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCbuiztgVyMsk6BwXgzH7KfmY3veU1QB5g'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
