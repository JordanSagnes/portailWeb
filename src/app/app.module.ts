import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './pages/login/login.component';
import {MatCardModule, MatFormFieldModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import { NavComponent } from './pages/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    UserComponent
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
        MatInputModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
