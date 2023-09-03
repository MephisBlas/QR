import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-logadmin',
  templateUrl: './logadmin.page.html',
  styleUrls: ['./logadmin.page.scss'],
})
export class LogadminPage implements OnInit {
  formularioLogin: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController, 
    public navCtrl: NavController
  ) {
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {}

  async ingresar() {
    const f = this.formularioLogin.value;

    // Define las credenciales del usuario administrador
    const usuarioAdministrador = {
      nombre: 'Jose Fernandez',
      email: 'josef@profesor.duoc.cl',
      password: 'admin123', 
      rol: 'Profesor',
    };

    if (f.nombre === usuarioAdministrador.nombre && f.password === usuarioAdministrador.password) {
      console.log('Ingresado como administrador');
      localStorage.setItem('ingresado', 'true');
      this.navCtrl.navigateRoot('inicio-admin');
    } else {
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      });

      await alert.present();
    }
  }
}
