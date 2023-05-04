import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { AlumnosService } from './services/alumnos.service';

export interface Alumno {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  nota: number;
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent {  

  dataSource = new MatTableDataSource<Alumno>();

  displayedColumns: string[] = ['id','alumno', 'iniciales', 'email', 'nota', 'ver_detalle', 'editar', 'eliminar'];

  constructor(
    private matDialog: MatDialog,
    private alumnosService: AlumnosService,
  ) {
    this.alumnosService.obtenerAlumnos()
      .subscribe((alumnos) => {
        this.dataSource.data = alumnos;
      })
  }

  crearAlumno(): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent)
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.dataSource.data = [
          ...this.dataSource.data,
          // AGREGANDO NUEVO ELEMENTO:
          {
            ...valor,
            id: this.dataSource.data.length + 1,
          }
        ];
      }
    })
  }

  eliminarAlumno(alumnoParaEliminar: Alumno): void {
    this.dataSource.data = this.dataSource.data.filter(
      (alumnoActual) => alumnoActual.id !== alumnoParaEliminar.id,
    );
  }
  
  editarAlumno(alumnoParaEditar: Alumno): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent, {
      data: {
        alumnoParaEditar
      }
    });
    dialog.afterClosed().subscribe((valorDelFormulario) => {
      if (valorDelFormulario) {
        this.dataSource.data = this.dataSource.data.map(
          (alumnoActual) => alumnoActual.id === alumnoParaEditar.id
            ? ({ ...alumnoActual, ...valorDelFormulario}) // { nombre: 'xxxxxx', apellido: 'xxxxx' }
            : alumnoActual,
        );
      }
    })
  }
}