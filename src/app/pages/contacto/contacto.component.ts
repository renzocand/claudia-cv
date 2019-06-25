import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsuariosService } from "../../services/usuarios.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-contacto",
  templateUrl: "./contacto.component.html",
  styles: []
})
export class ContactoComponent {
  lat: number = -12.084932;
  lng: number = -77.053331;
  submitted = false;
  envioCorrecto = false;

  form: FormGroup;

  constructor(private _us: UsuariosService) {
    this.form = new FormGroup({
      nombre: new FormControl("", Validators.required),
      correo: new FormControl("", [Validators.required, Validators.pattern("^[^@]+@[^@]+\.[a-zA-Z]{2,}$")]),
      asunto: new FormControl("", Validators.required),
      mensaje: new FormControl("", Validators.required)
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.submitted = true;
      return false;
    }
    this.submitted = false;

    Swal.fire({
      title: "Enviando correo",
      text: "Espere por favor...",
      allowOutsideClick: false,
      type: "info"
    });
    Swal.showLoading();

    this._us.mandarCorreo(this.form.value).subscribe(data => {
      Swal.fire({
        title: 'Listo',
        text: data['mensaje'],
        type: 'success',
      })
      this.form.reset()
      if(data['ok']===true){
         this.envioCorrecto = true;
      }
    });
    // console.log(this.form.value);
  }
}
