import { Employee } from '../models/employee.model';

/**
 * Lista de empleados de ejemplo para la aplicación Endalia HR.
 * Sirve para probar la app sin necesidad de un backend real.
 * 
 * Cada empleado tiene:
 * - id: identificador único
 * - name: nombre
 * - surname: apellidos
 * - position: cargo en la empresa
 * - phone: teléfono
 * - email: correo corporativo
 * - image: avatar de perfil aleatorio (usando pravatar.cc)
 */

export const EMPLOYEES: Employee[] = [
    {
        id: 1,
        name: 'Alejandro',
        surname: 'Toro Minguez',
        position: 'Front End Developer',
        phone: '666555444',
        email: 'alejandro.toro@endalia.com',
        image: 'https://i.pravatar.cc/150?img=1'
    },
    {
        id: 2,
        name: 'María',
        surname: 'García Pérez',
        position: 'Back End Developer',
        phone: '677888999',
        email: 'maria.garcia@endalia.com',
        image: 'https://i.pravatar.cc/150?img=5'
    },
    {
        id: 3,
        name: 'Carlos',
        surname: 'Rodríguez Hernández',
        position: 'Full Stack Developer',
        phone: '688777666',
        email: 'carlos.rodriguez@endalia.com',
        image: 'https://i.pravatar.cc/150?img=12'
    },
    {
        id: 4,
        name: 'Ana',
        surname: 'Martínez Gómez',
        position: 'UX/UI Designer',
        phone: '699111222',
        email: 'ana.martinez@endalia.com',
        image: 'https://i.pravatar.cc/150?img=9'
    },
    {
        id: 5,
        name: 'David',
        surname: 'López Ramírez',
        position: 'Project Manager',
        phone: '611222333',
        email: 'david.lopez@endalia.com',
        image: 'https://i.pravatar.cc/150?img=13'
    },
    {
        id: 6,
        name: 'Laura',
        surname: 'Sánchez Morales',
        position: 'DevOps Engineer',
        phone: '622333444',
        email: 'laura.sanchez@endalia.com',
        image: 'https://i.pravatar.cc/150?img=20'
    },
    {
        id: 7,
        name: 'Jorge',
        surname: 'Fernández Vega',
        position: 'Data Analyst',
        phone: '633444555',
        email: 'jorge.fernandez@endalia.com',
        image: 'https://i.pravatar.cc/150?img=15'
    },
    {
        id: 8,
        name: 'Carmen',
        surname: 'Ruiz Delgado',
        position: 'QA Tester',
        phone: '644555666',
        email: 'carmen.ruiz@endalia.com',
        image: 'https://i.pravatar.cc/150?img=26'
    },
    {
        id: 9,
        name: 'Francisco',
        surname: 'Jiménez Molina',
        position: 'Mobile Developer',
        phone: '655666777',
        email: 'francisco.jimenez@endalia.com',
        image: 'https://i.pravatar.cc/150?img=33'
    },
    {
        id: 10,
        name: 'Isabel',
        surname: 'Moreno Castro',
        position: 'Scrum Master',
        phone: '666777888',
        email: 'isabel.moreno@endalia.com',
        image: 'https://i.pravatar.cc/150?img=47'
    },
];