import { EditarEducacionComponent } from './components/edicion/editar-educacion/editar-educacion.component';
import { EditarProyectosComponent } from './components/edicion/editar-proyectos/editar-proyectos.component';
import { NuevaExperienciaComponent } from './components/edicion/nueva-experiencia/nueva-experiencia.component';
import { EdicionComponent } from './components/edicion/edicion.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarExperienciaComponent } from './components/edicion/editar-experiencia/editar-experiencia.component';
import { EditarHabilidadComponent } from './components/edicion/editar-habilidad/editar-habilidad.component';

const routes: Routes = [
  { path: 'porfolio', component: PorfolioComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: '', redirectTo: 'porfolio', pathMatch: 'full' },
  { path: 'edicion', component: EdicionComponent },
  { path: 'nueva-experiencia', component: NuevaExperienciaComponent },
  { path: 'editexp/:id', component: EditarExperienciaComponent },
  { path: 'editProject/:id', component: EditarProyectosComponent },
  { path: 'editarEstudios/:id', component: EditarEducacionComponent },
  { path: 'editarHabilidad/:id', component: EditarHabilidadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
