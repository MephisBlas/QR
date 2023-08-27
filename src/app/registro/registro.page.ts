import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'confirmacionPassword': new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }

  guardar() {
    // Agregar aquí la lógica para guardar los datos de registro
    if (this.formularioRegistro.valid) {
      // Lógica para procesar el formulario
      console.log(this.formularioRegistro.value);
    } else {
      // Manejar los errores de validación
      console.log('El formulario no es válido');
    }
  }

}
