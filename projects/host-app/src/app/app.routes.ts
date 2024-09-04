import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const USER_APP_URL = "http://localhost:4300/remoteEntry.js";
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'user', loadComponent: () => import('userApp/UserComponent').then(c => c.UserComponent)
    }
];
