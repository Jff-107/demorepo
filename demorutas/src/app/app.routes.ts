import { Routes } from '@angular/router';
import { FormPlantilla } from './form-plantilla/form-plantilla';
import { FormReactivo } from './form-reactivo/form-reactivo';
import { Detalle1 } from './detalle1/detalle1';
import { NoEncontrado } from './no-encontrado/no-encontrado';
import { Detalle2 } from './detalle2/detalle2';
import { FormUsuario } from './form-usuario/form-usuario';

export const routes: Routes = [
        {
        path: 'formusuarios',
        component: FormUsuario,
        title: 'Usuarios con service',
        },
        {
        path: 'formreactivo',
        component: FormReactivo,
        title: 'Formulario reactivo',
        },
        {
        path: 'formplantilla',
        component: FormPlantilla,
        title: 'Formulario basado en plantilla',
        },    
        {
        path: 'detalle1',
        component: Detalle1,
        title: 'Detalle 1',
        },
        
        {
        path: 'detalle2/:miparam',
        component: Detalle2,
        title: 'Detalle 2',
        },

        {
    path: '**',
    component: NoEncontrado,
    title: 'Pagina no encontrada',
    }
];
