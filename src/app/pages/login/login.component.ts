import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, from } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationsService } from 'src/app/core/services/notifications.service';

interface Usuario {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isLoggedIn = new Subject<Usuario>();
  notifier = new Subject<string>();

  emailControl = new FormControl('',[
    Validators.required,
    Validators.email,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
  ]);
  passwordControl = new FormControl('',[
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(100)
  ]);

  authForm = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  });

  formularioValido = this.authForm.value

  constructor(
    private notificationsService: NotificationsService,
    private authService: AuthService
    ) {

      if(this.authForm.valid) {
        console.log('valido')
      }
    }
    
  loginMessage(): void {
    this.notificationsService.mensajeLogin('Logged in');
  }

  login(): void {
    if(this.formularioValido){
      this.authService.login({
        ...(this.authForm.value as any),
        id: 54,
      })
    }
  }
}