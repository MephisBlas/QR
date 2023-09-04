import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
})
export class UserModalComponent implements OnInit {
  nombreDeUsuario: string = ''; // Inicializa la propiedad

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    // Obtén el nombre de usuario desde el localStorage o cualquier otro lugar donde esté almacenado
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
      const usuario = JSON.parse(usuarioString);
      this.nombreDeUsuario = usuario.nombre;
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
