import { NuevaExperienciaComponent } from './components/edicion/nueva-experiencia/nueva-experiencia.component';
import { EdicionComponent } from './components/edicion/edicion.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarExperienciaComponent } from './components/edicion/editar-experiencia/editar-experiencia.component';

const routes: Routes = [
  { path: 'porfolio', component: PorfolioComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: '', redirectTo: 'porfolio', pathMatch: 'full' },
  { path: 'edicion', component: EdicionComponent },
  { path: 'nueva-experiencia', component: NuevaExperienciaComponent },
  { path: 'editexp/:id', component: EditarExperienciaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
