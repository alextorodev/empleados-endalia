# EmpleadosEndalia

Aplicación de ejemplo para gestionar empleados de Endalia HR. Construida con Angular 21.1.1.

## Funcionalidades principales

- Login de usuario con autenticación simulada.
- Listado de empleados con búsqueda y filtrado por nombre, apellido, puesto, teléfono o correo.
- Orden automático por apellido.
- Barra superior con nombre de la app y botón de logout.
- Persistencia básica de sesión usando localStorage.
- Mocks de datos para empleados y usuarios.

## Mocks de datos

**Usuarios para login:** `/src/app/mocks/auth.mock.ts`

Credenciales disponibles:

| Email | Contraseña |

| `admin@endalia.com` | `123456` |
| `user@endalia.com` | `654321` |

**Empleados:** `/src/app/mocks/employees.mock.ts`

Contiene 10 empleados de prueba con nombre, apellido, puesto, teléfono, email e imagen de perfil.

## Cómo ejecutar el proyecto

**Instalar dependencias:**
```bash
npm install
```

**Levantar servidor de desarrollo:**
```bash
ng serve
```

**Abrir en el navegador:**
```
http://localhost:4200/
```

La app se recarga automáticamente cuando modificas el código.

## Comandos útiles

**Generar un nuevo componente:**
```bash
ng generate component nombre-del-componente
```

**Compilar el proyecto:**
```bash
ng build
```

**Ejecutar tests unitarios (Vitest):**
```bash
ng test
```
