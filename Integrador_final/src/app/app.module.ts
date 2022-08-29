import { InterceptorService } from './servicios/interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticleComponent } from './components/article/article.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ConociminentosComponent } from './components/conociminentos/conociminentos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LogotipoRedesLoginComponent } from './components/header/logotipo-redes-login/logotipo-redes-login.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EdicionComponent } from './components/edicion/edicion.component';
import { NuevaExperienciaComponent } from './components/edicion/nueva-experiencia/nueva-experiencia.component';
import { CommonModule } from '@angular/common';
import { ExperienciaService } from './servicios/experiencia.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticleComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EstudiosComponent,
    ConociminentosComponent,
    LogotipoRedesLoginComponent,
    IniciarSesionComponent,
    PorfolioComponent,
    AcercaDeComponent,
    EdicionComponent,
    NuevaExperienciaComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgCircleProgressModule.forRoot({}),
    ReactiveFormsModule,
    FormsModule,
    CommonModule

  ],
  providers: [ {provide:HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
