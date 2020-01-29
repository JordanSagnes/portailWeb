import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {LoginComponent} from './pages/login/login.component';
import {MatCardModule, MatFormFieldModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {UserComponent} from './shared/user/user.component';
import {HeaderComponent} from './pages/header/header.component';
import {NavigationComponent} from './pages/navigation/navigation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {RouterModule} from '@angular/router';
import appRoutes from './router';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {AngularFireModule} from '@angular/fire';
import { environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        UserComponent,
        HeaderComponent,
        NavigationComponent,
        UsersListComponent,
        DashboardComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatToolbarModule,
        MatSidenavModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        RouterModule.forRoot(appRoutes, { enableTracing: false }),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireModule,
        AngularFireDatabaseModule
    ],
    providers: [AuthService, AngularFireAuth, AngularFireAuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
