import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  usuarioString: string | undefined; 

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    
    var usuarioString = localStorage.getItem('usuario');
    this.usuarioString = usuarioString !== null ? JSON.parse(usuarioString).nombre : null;
  }

  cerrarSesion() {
    
    this.authService.cerrarSesion(); 
    this.router.navigate(['/login']); 
  }
}
