import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { IngresadoGuard } from './ingresado.guard';
import { RegistroPage } from './registro/registro.page';
import { LoginPage } from './login/login.page'; 

const routes: Routes = [

  { path: 'registro', component: RegistroPage },
  { path: 'login', component: LoginPage }, 

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [IngresadoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }




