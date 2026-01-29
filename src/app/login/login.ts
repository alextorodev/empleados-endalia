import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email: string = '';
  password: string = '';
  errorMessage: string = '';
  loading: boolean = false;

  constructor(private authService: AuthService, private router: Router, private cdr: ChangeDetectorRef) { }

  // Gestion del envio del formulario
  onSubmit(): void {
    this.errorMessage = '';

    // Validamos que los campos no esten vacios
    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor, complete todos los campos.';
      return;
    }

    this.loading = true;

    // Intentamos iniciar sesión
    this.authService.login(this.email, this.password).then(success => {
      this.loading = false;

      // Si el login es correcto, nos lleva a la lista de empleados
      if (success) {
        this.router.navigate(['/employees']);
      } else {
        // Si falla, mostramos un mensaje de error
        this.errorMessage = 'Credenciales inválidas. Inténtelo de nuevo.';
        // Deteccion de cambios, fuerza actualizacion de error
        this.cdr.detectChanges();
      }
    });

  }
}