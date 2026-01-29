import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

// Este guard protege rutas que requieren login
export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    // Permite acceder si está autenticado
    if (authService.checkAuthentication()) {
        return true;
    } else {
        // Si no está logueado, redirige al login
        router.navigate(['/login']);
        return false;
    }
}