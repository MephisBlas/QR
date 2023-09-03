import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  mostrarNombreUsuario: boolean = false;
  usuarioString: string = '';
  Bienvenido: string = 'Bienvenido ';

  constructor(
    private authService: AuthService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const estaAutenticado = this.authService.estaAutenticado();
    const rolUsuario = this.authService.obtenerRolUsuario();

    if (estaAutenticado && rolUsuario === 'admin') {
      this.mostrarNombreUsuario = true;
      this.usuarioString = this.authService.obtenerNombreUsuario();
    }
  }

  // Define la función para cerrar sesión
  async cerrarSesion() {
    // Aquí puedes llamar al servicio AuthService para cerrar sesión
    this.authService.cerrarSesion();
    
    // Redirige al usuario a la página de inicio de sesión
    this.navCtrl.navigateRoot('login');
  }
}
