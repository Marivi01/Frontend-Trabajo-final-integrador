import { AutenticacionService } from './../../servicios/autenticacion.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router) {
  this.form=this.formBuilder.group(
    {
      nombreUsuario:['',[Validators.required]],
      password:['',[Validators.required, Validators.minLength(8)]],
      deviceInfo:this.formBuilder.group({
        deviceId:[''],
        deviceType:[''],
        notificationToken:['']
      })

    }
  );
}
  ngOnInit(): void {
  }

  get NombreUsuario(){
return this.form.get('nombreUsuario');
  }
  get Password(){
    return this.form.get('password');
  }

  onEnviar(event:Event)
  {
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe((data)=>{
      console.log("DATA:" +JSON.stringify(data));
      this.ruta.navigate (['./edicion']);
    })

  }
}

