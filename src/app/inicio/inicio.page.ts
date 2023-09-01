import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router para redireccionar

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Función para cerrar sesión
  cerrarSesion() {
    // Aquí puedes realizar acciones para cerrar la sesión, como eliminar tokens de autenticación, etc.

    // Luego, redirige a la página de inicio de sesión
    this.router.navigate(['/login']); // Asegúrate de tener una ruta definida para la página de inicio de sesión
  }
}