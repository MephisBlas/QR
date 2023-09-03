import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { IngresadoGuard } from './ingresado.guard';
import { RegistroPage } from './auth/registro/registro.page';
import { LoginPage } from './auth/login/login.page'; 

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
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./auth/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./alumno/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./auth/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./alumno/asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./alumno/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./alumno/horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./alumno/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'logadmin',
    loadChildren: () => import('./profesor/logadmin/logadmin.module').then( m => m.LogadminPageModule)
  },

  {
    path: 'admincuenta',
    loadChildren: () => import('./profesor/admincuenta/admincuenta.module').then( m => m.AdmincuentaPageModule)
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./profesor/asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule)
  },
  {
    path: 'horarioadmiin',
    loadChildren: () => import('./profesor/horarioadmiin/horarioadmiin.module').then( m => m.HorarioadmiinPageModule)
  },
  {
    path: 'inicio-admin',
    loadChildren: () => import('./profesor/inicio-admin/inicio-admin.module').then( m => m.InicioAdminPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }




