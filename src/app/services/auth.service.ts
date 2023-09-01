import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  private nombreUsuario: string = '';

  constructor() { }

  // Simulación de inicio de sesión
  iniciarSesion(nombre: string, contraseña: string): boolean {
    // Aquí verificarías las credenciales con un backend real
    if (nombre === 'usuario' && contraseña === 'contraseña') {
      this.usuarioAutenticado = true;
      this.nombreUsuario = nombre;
      return true;
    }
    return false;
  }

  // Simulación de cierre de sesión
  cerrarSesion(): void {
    this.usuarioAutenticado = false;
    this.nombreUsuario = '';
  }

  // Comprobar si el usuario está autenticado
  estaAutenticado(): boolean {
    return this.usuarioAutenticado;
  }

  // Obtener el nombre del usuario autenticado
  obtenerNombreUsuario(): string {
    return this.nombreUsuario;
  }
}
