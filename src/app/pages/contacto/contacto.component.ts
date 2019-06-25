import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: []
})
export class ContactoComponent {

  lat: number = -12.084932;
  lng: number = -77.053331;
  submitted = false;
  
  form:FormGroup

  constructor(private _us:UsuariosService) { 


    this.form = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'correo': new FormControl('', Validators.required),
      'asunto': new FormControl(),
      'mensaje': new FormControl('', Validators.required)
    })
  }

  get f(){
    return this.form.controls
  }

  onSubmit(){
    if(this.form.invalid){
      this.submitted = true;
      return false;
    }

    console.log(this.form.value);
  }
  

}
