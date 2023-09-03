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
    }, {
      validators: this.checkNameAndPassword // Usar el validador personalizado
    });
  }

  ngOnInit() {
  }

  async guardar() {
    var f = this.formularioRegistro.value;

    // Verificar si el correo ya está registrado
    const usuariosRegistrados = localStorage.getItem('usuariosRegistrados');
    if (usuariosRegistrados) {
      const usuarios = JSON.parse(usuariosRegistrados);
      if (usuarios.find((usuario: any) => usuario.email === f.correo)) {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'El correo electrónico ya está registrado.',
          buttons: ['Aceptar']
        });
        await alert.present();
        return;
      } else {
        usuarios.push({
          nombre: f.nombre,
          password: f.password,
          email: f.correo
        });
        localStorage.setItem('usuariosRegistrados', JSON.stringify(usuarios));
      }
    } else {
      const usuario = {
        nombre: f.nombre,
        password: f.password,
        email: f.correo
      };
      localStorage.setItem('usuariosRegistrados', JSON.stringify([usuario]));
    }
    localStorage.setItem('email', f.correo);

    // Asignar el rol "alumno" por defecto
    const usuario = {
      nombre: f.nombre,
      password: f.password,
      email: f.correo,
      rol: 'alumno' // Asignar el rol "alumno" por defecto
    };

    if (this.formularioRegistro.invalid) {
      if (this.formularioRegistro.hasError('minlength', 'password')) {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'La contraseña debe tener al menos 8 caracteres.',
          buttons: ['Aceptar']
        });
        await alert.present();
        return;
      }

      if (f.nombre.match(/\d/)) {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'El nombre de usuario no puede contener números.',
          buttons: ['Aceptar']
        });
        await alert.present();
        return;
      }

      if (this.formularioRegistro.hasError('email', 'correo')) {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'El correo electrónico no es válido.',
          buttons: ['Aceptar']
        });
        await alert.present();
        return;
      }

      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos.',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    if (f.nombre === f.password) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'La contraseña no puede ser igual al nombre de usuario.',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    // Guardar el usuario con su rol en localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.router.navigate(['/login']);
  }

  // Custom validator
  checkNameAndPassword(group: FormGroup) {
    const nombre = group.get('nombre')?.value;
    const password = group.get('password')?.value;

    if (nombre === password) {
      return { nameAndPasswordMatch: true };
    }

    return null;
  }
}
