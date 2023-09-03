import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  obtenerNombreDeUsuarioDesdeLocalStorage(): string | undefined {
    throw new Error('Method not implemented.');
  }
  private usuarioAutenticado: boolean = false;
  private nombreUsuario: string = '';
  private rolUsuario: string = ''; // Agrega una propiedad para almacenar el rol del usuario

  private usuarios = [
    {
      nombre: 'Jose Fernandez',
      email: 'josef@profesor.duoc.cl',
      password: 'admin123', 
      rol: 'Profesor',
    },
    // Otros usuarios, si los tienes
  ];

  constructor() {}

  // Simulación de inicio de sesión
  iniciarSesion(nombre: string, contraseña: string): boolean {
    // Verifica las credenciales en la lista de usuarios simulados
    const usuarioEncontrado = this.usuarios.find(
      (usuario) => usuario.nombre === nombre && usuario.password === contraseña
    );

    if (usuarioEncontrado) {
      this.usuarioAutenticado = true;
      this.nombreUsuario = nombre;
      this.rolUsuario = usuarioEncontrado.rol; // Asigna el rol del usuario encontrado
      return true;
    }

    return false;
  }

  // Simulación de cierre de sesión
  cerrarSesion(): void {
    this.usuarioAutenticado = false;
    this.nombreUsuario = '';
    this.rolUsuario = '';
  }

  // Comprobar si el usuario está autenticado
  estaAutenticado(): boolean {
    return this.usuarioAutenticado;
  }

  // Obtener el nombre del usuario autenticado
  obtenerNombreUsuario(): string {
    return this.nombreUsuario;
  }

  // Obtener el rol del usuario autenticado
  obtenerRolUsuario(): string {
    return this.rolUsuario;
  }
}
