import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menuController: MenuController) { }

  // Método para abrir el menú
  async abrirMenu() {
    await this.menuController.open();
  }

  // Método para cerrar el menú
  async cerrarMenu() {
    await this.menuController.close();
  }
}
