import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  email: string = '';

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) {}

  resetPassword() {
    console.log("Correo ingresado:", this.email);
    if (this.isValidEmail(this.email)) {
      const email = localStorage.getItem('email');
      console.log("Correo registrado:", email);
      if (email === this.email) {
        console.log("Coinciden los correos.");
        this.showToast('Correo de recuperación enviado.');
      } else {
        console.log("No coinciden los correos.");
        this.showToast('El correo no está registrado.');
      }
    } else {
      console.log("Correo inválido:", this.email);
      this.showToast('Por favor, ingresa un correo válido.');
    }
  }
  

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'middle',
    });
    toast.present();
  }

  isValidEmail(email: string): boolean {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  }
}
