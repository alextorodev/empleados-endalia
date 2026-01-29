import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Employees } from './employees/employees';
import { authGuard } from './guards/auth.guard';

// Rutas de la aplicacion
export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'employees',
        component: Employees,
        canActivate: [authGuard] // Protegida por el guard de autenticación
    },
    // ruta por defecto
    {path: '**', redirectTo: 'login'}
];