import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { ReferenciasComponent } from './pages/referencias/referencias.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'  },
    { path: 'home', component: HomeComponent },
    { path: 'educacion', component: EducacionComponent },
    { path: 'experiencia', component: ExperienciaComponent },
    { path: 'referencia', component: ReferenciasComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '**', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash:true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
