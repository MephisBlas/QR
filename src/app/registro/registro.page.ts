import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public alertController: AlertController
  ) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z]+')]),
      'correo': new FormControl("", [Validators.required, Validators.email]),
      'password': new FormControl("", [Validators.required, Validators.minLength(8)]),
      'confirmacionPassword': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  async guardar() {
    var f = this.formularioRegistro.value;

    if (this.formularioRegistro.invalid) {
      if (this.formularioRegistro.hasError('minlength', 'password')) {
        // Mostrar alerta si la contraseña es muy corta
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'La contraseña debe tener al menos 8 caracteres.',
          buttons: ['Aceptar']
        });

        await alert.present();
        return;
      }

      if (f.nombre.match(/\d/)) {
        // Mostrar alerta si el nombre de usuario contiene números
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'El nombre de usuario no puede contener números.',
          buttons: ['Aceptar']
        });

        await alert.present();
        return;
      }

      if (this.formularioRegistro.hasError('email', 'correo')) {
        // Mostrar alerta si el correo electrónico no es válido
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'El correo electrónico no es válido.',
          buttons: ['Aceptar']
        });

        await alert.present();
        return;
      }

      // Mostrar alerta si hay campos vacíos u otros errores
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

    if (f.nombre === f.password) {
      // Mostrar alerta si la contraseña es igual al nombre de usuario
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'La contraseña no puede ser igual al nombre de usuario.',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

    var usuario = {
      nombre: f.nombre,
      password: f.password
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.router.navigate(['/login']);
  }

  // Custom validator
  checkNameAndPassword(group: FormGroup) {
    const nombre = group.get('nombre')?.value; // Usar ?. para acceder de forma segura
    const password = group.get('password')?.value; // Usar ?. para acceder de forma segura

    if (nombre === password) {
      return { nameAndPasswordMatch: true };
    }

    return null;
  }
}
