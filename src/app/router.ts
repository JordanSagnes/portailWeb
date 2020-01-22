import {Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {UserComponent} from './pages/user/user.component';
import {AuthGuardService} from './services/guards/auth-guard.service';
import {IsAuthGuardService} from './services/guards/is-auth-guard.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', canActivate: [IsAuthGuardService], component: LoginComponent },
    { path: 'user', canActivate: [AuthGuardService], component: UserComponent },
];

export default appRoutes;
