import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private mensaje$ = new Subject()

  constructor() {
    this.mensaje$.subscribe(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Logged in',
        showConfirmButton: false,
        timer: 1500
      });
    })
   }

  mensajeLogin(msg: string) {
  this.mensaje$.next(msg)  
  }
}
