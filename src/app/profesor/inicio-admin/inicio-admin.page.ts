import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.page.html',
  styleUrls: ['./inicio-admin.page.scss'],
})
export class InicioAdminPage implements OnInit {

  mostrarNombreUsuario: boolean = false;
  usuarioString: string = '';

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

