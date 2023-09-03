import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-admincuenta',
  templateUrl: './admincuenta.page.html',
  styleUrls: ['./admincuenta.page.scss'],
})

export class CuentaPage {
  nombreDeUsuario: string = '';
  correoDeUsuario: string = '';
  rolDeUsuario: string = '';
  mostrarDatosUsuario: boolean = false;
  contrasenaActual: string = '';
  nuevaContrasena: string = '';
  confirmarNuevaContrasena: string = '';

  constructor(
    private alertController: AlertController,
    private authService: AuthService
  ) {
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
      const usuario = JSON.parse(usuarioString);

      // Verifica si el usuario es un administrador
      if (this.authService.estaAutenticado() && this.authService.obtenerRolUsuario() === 'admin') {
        // Si es un administrador, muestra los datos del administrador
        this.nombreDeUsuario = 'Jose Fernandes';
        this.correoDeUsuario = 'josef@profesor.duoc.cl';
        this.rolDeUsuario = 'Admin';
        this.mostrarDatosUsuario = true;
      } else {
        // Si no es un administrador, muestra los datos del usuario almacenados
        this.nombreDeUsuario = usuario.nombre;
        this.correoDeUsuario = usuario.email;
        this.rolDeUsuario = usuario.rol;
      }
    }
  }

  async cambiarContrasena() {
    // Aquí colocas la lógica para cambiar la contraseña
    // Reemplaza esta parte con tu lógica real para cambiar la contraseña
    // Actualiza la contraseña almacenada en tu sistema o donde corresponda

    const alert = await this.alertController.create({
      header: 'Contraseña Cambiada',
      message: 'Tu contraseña ha sido cambiada con éxito.',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }
}
