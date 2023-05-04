import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';


import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    AlumnosComponent,
    AbmAlumnosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    PipesModule,
    DirectivesModule,
    MatDialogModule
  ],
  exports: [
    AlumnosComponent
  ]
})
export class AlumnosModule { }
