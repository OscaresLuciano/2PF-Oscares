import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from 'src/app/pages/alumnos/alumnos.component';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: Alumno, ...args: unknown[]): unknown {
    const nombre = value.nombre.split(' ');
    const inicialNombre = nombre.map(nombre => nombre.charAt(0));
    const apellido = value.apellido.split(' ');
    const inicialApellido = apellido.map(apellido => apellido.charAt(0));
    const iniciales = [inicialNombre, inicialApellido];
    const newValue = iniciales.join('');
    return newValue;
  }

}
