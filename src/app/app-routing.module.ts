import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
      path: 'alumnos',
      component: AlumnosComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }