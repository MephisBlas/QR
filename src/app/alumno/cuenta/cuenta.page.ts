import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage {

  nombreDeUsuario: string = ''; 
  correoDeUsuario: string = '';
  rolDeUsuario: string = ''; // Agrega la variable para el rol de usuario
  mostrarDatosUsuario: boolean = false; // Variable para mostrar los datos del usuario

  contrasenaActual: string = '';
  nuevaContrasena: string = '';
  confirmarNuevaContrasena: string = '';



  constructor(
    private alertController: AlertController,
    private router: Router,
    private authService: AuthService // Inyecta el servicio AuthService
  ) {
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
      const usuario = JSON.parse(usuarioString);
      this.nombreDeUsuario = usuario.nombre;
      this.correoDeUsuario = usuario.email;
      this.rolDeUsuario = usuario.rol; // Obtén el rol de usuario

      // Verifica si el usuario es un administrador
      if (this.authService.estaAutenticado() && this.authService.obtenerRolUsuario() === 'admin') {
        this.mostrarDatosUsuario = true;
      }
    }
  }

  async cambiarContrasena() {
    // Obtener la contraseña actual almacenada en localStorage o en tu sistema
    const contrasenaAlmacenada = 'la_contraseña_almacenada'; // Reemplaza esto con tu lógica real

    console.log('Contraseña actual ingresada:', this.contrasenaActual);
    console.log('Contraseña almacenada:', contrasenaAlmacenada);

    if (this.contrasenaActual !== contrasenaAlmacenada) {
        const alert = await this.alertController.create({
            header: 'Error',
            message: 'La contraseña actual no es correcta.',
            buttons: ['Aceptar']
        });
        await alert.present();
        return;
    }

    if (this.nuevaContrasena !== this.confirmarNuevaContrasena) {
        const alert = await this.alertController.create({
            header: 'Error',
            message: 'Las contraseñas nuevas no coinciden.',
            buttons: ['Aceptar']
        });
        await alert.present();
        return;
    }

    // Cambiar la contraseña en tu sistema aquí
    // Reemplaza esta parte con la lógica real para cambiar la contraseña
    // Actualiza la contraseña almacenada en tu sistema o en donde corresponda

    const alert = await this.alertController.create({
        header: 'Contraseña Cambiada',
        message: 'Tu contraseña ha sido cambiada con éxito.',
        buttons: ['Aceptar']
    });
    await alert.present();
  }
}
