import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { SubMenuLayoutComponent } from './components/sub-menu-layout/sub-menu-layout.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    // {
    //     path: '',
    //     component: LayoutComponent,
    //     children:[
    //         {
    //             path:'employee',
    //             component: EmployeeComponent,
    //             title: 'Employee'
    //         },
    //         {
    //             path:'dashboard',
    //             component: DashboardComponent,
    //             title: 'Dashboard'   //you can set title here in angular 8 which will show on browser
    //         }
            
    //     ]
    // }

    {
        path: '',
        component: SubMenuLayoutComponent,               //created new layout which has expandable menu
        children:[
            {
                path:'dashboard',
                component: DashboardComponent,
                title: 'Dashboard'   //you can set title here in angular 8 which will show on browser
            },
            {
                path:'employee',
                component: EmployeeComponent,
                title: 'Employee'
            }
            
        ]
    }
];
