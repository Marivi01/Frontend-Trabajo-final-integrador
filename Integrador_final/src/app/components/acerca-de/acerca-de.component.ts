import { PersonaService } from './../../servicios/persona.service';
import { InterceptorService } from 'src/app/servicios/interceptor.service';
import { persona } from 'src/app/model/persona.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
persona: persona= new persona("","","");


  constructor(public personaService:PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{
      this.persona=data;
      console.log(data)
    })
  }

}
