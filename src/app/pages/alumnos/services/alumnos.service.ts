import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Alumno } from '../alumnos.component';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  // BehaviorSubject
  private alumnos$ = new BehaviorSubject<Alumno[]>([
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Perez',
      email: 'jlperez@gmail.com',
      nota: 3,
    },{
      id: 2,
      nombre: 'Raul',
      apellido: 'Gonzalez',
      email: 'gonraul@hotmail.com',
      nota: 7,
    },{
      id: 3,
      nombre: 'Ismael',
      apellido: 'Pereyra',
      email: 'pere123@gmail.com',
      nota: 10,
    },
  ])

  constructor() { }

  obtenerAlumnos(): Observable<Alumno[]> {
    return this.alumnos$.asObservable();
  }

  obtenerAlumnoPorId(id: number): Observable<Alumno | undefined> {
    return this.alumnos$.asObservable()
      .pipe(
        map((alumnos) => alumnos.find((a) => a.id === id))
      )
  }
}
