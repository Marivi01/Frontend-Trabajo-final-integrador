import { Persona } from './../../model/persona.model';
import { PersonaService } from './../../servicios/persona.service';
import { InterceptorService } from 'src/app/servicios/interceptor.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
persona: Persona= new Persona("","","");


  constructor(public personaService:PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{
      this.persona=data;
      console.log(data)
      console.log(Persona)
    })
  }

}
