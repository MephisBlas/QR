import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { UserModalComponent } from 'src/app/user-modal/user-modal.component';

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
    private navCtrl: NavController,
    private modalController: ModalController
  ) { }

  async abrirModal() {
    console.log('Abriendo el modal...');
    const modal = await this.modalController.create({
      component: UserModalComponent,
      backdropDismiss: false,
    });
    await modal.present();
  }

  ngOnInit() {
    const estaAutenticado = this.authService.estaAutenticado();
    const rolUsuario = this.authService.obtenerRolUsuario();

    if (estaAutenticado && rolUsuario === 'admin') {
      this.mostrarNombreUsuario = true;
      this.usuarioString = this.authService.obtenerNombreUsuario();
      this.abrirModal(); // Abre el modal automáticamente cuando cumple con las condiciones
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
