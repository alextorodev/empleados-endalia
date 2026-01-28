import { Injectable } from "@angular/core";
import { MOCK_USERS } from "../mocks/auth.mock";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isAuthenticated = false;

  constructor() {
    // Recupera el estado de autenticación desde localStorage al iniciar
    this.isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
  }

    login(email: string, password: string): Promise<boolean> {
    // Simula llamada a API
    return new Promise((resolve) => {
      setTimeout(() => {
        this.isAuthenticated = MOCK_USERS.some(user => user.email === email && user.password === password);
        
        // Guarda el estado en localStorage
        if (this.isAuthenticated) {
          localStorage.setItem('isLoggedIn', 'true');
        } else {
        // Limpia localStorage si el login falla
          localStorage.removeItem('isLoggedIn');
        }
        
        resolve(this.isAuthenticated);
        }, 1000);   
    });
    }

    // Cierra la sesión del usuario
    logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('isLoggedIn');
    }  

    // Comprueba si el usuario está logueado
    checkAuthentication(): boolean {
        // Revisa variable interna o localStorage
    return this.isAuthenticated || localStorage.getItem('isLoggedIn') === 'true';
    }
}