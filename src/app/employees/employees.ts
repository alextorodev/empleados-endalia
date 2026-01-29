import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EMPLOYEES } from '../mocks/employees.mock';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  imports: [CommonModule, FormsModule],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class Employees {
  employees: Employee[] = EMPLOYEES; // Datos de prueba
  filter: string = ''; // Texto de busqueda
  isAuthenticated: boolean;

  constructor(private authService: AuthService, private router: Router) { 
    // Comprobamos si hay sesión iniciada
    this.isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
  }

  // Devuelve los empleados filtrados y ordenados por apellido
  get filteredEmployees(): Employee[] {
    if (!this.filter) {
      return this.employees;
    }
    // Filtro de búsqueda (por defecto ordena apellido)
    const search = this.filter.toLowerCase();
    return this.employees
    .slice() // crea copia para no modificar el original
    .sort((a, b) => a.surname.localeCompare(b.surname))
    .filter(employee =>
      employee.name.toLowerCase().includes(search) ||
      employee.surname.toLowerCase().includes(search) ||
      employee.position.toLowerCase().includes(search) ||
      employee.phone.toLowerCase().includes(search) ||
      employee.email.toLowerCase().includes(search)
    );
    }

    // Cierra la sesión del usuario y redirige al login
    logout(): void {
      this.authService.logout();
      this.router.navigate(['/login']);
  }
}