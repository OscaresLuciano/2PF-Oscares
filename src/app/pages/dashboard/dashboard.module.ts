import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { LoginModule } from '../../pages/login/login.module';
import { AlumnosModule } from '../../pages/alumnos/alumnos.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,

    PipesModule,
    DirectivesModule,
    AlumnosModule,
    LoginModule,
  ],
  exports: [
    DashboardComponent
  ],
})
export class DashboardModule { }
