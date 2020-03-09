import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './pages/login/login.component';
import {LayoutModule} from '@angular/cdk/layout';
import {UserComponent} from './shared/user/user.component';
import {HeaderComponent} from './pages/header/header.component';
import {NavigationComponent} from './pages/navigation/navigation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './services/auth/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {RouterModule} from '@angular/router';
import {appRoutes} from './router';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {AngularFireModule} from '@angular/fire';
import { environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
import { ForumComponent } from './pages/forum/forum.component';
import {PostService} from './services/post/post.service';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import { ForumFormComponent } from './pages/forum-form/forum-form.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { ModalComponent } from './shared/modal/modal.component';
import { StopClickPropagationDirective } from './directives/stop-click-propagation.directive';
import { SnackBarComponent } from './shared/snack-bar/snack-bar.component';
import { FilesComponent } from './pages/files/files.component';
import { FileFormComponent } from './pages/file-form/file-form.component';
import { DragAndDropDirective } from './pages/file-form/drag-and-drop.directive';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {FileService} from './services/file/file.service';
import { UserFormComponent } from './shared/user-form/user-form.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        UserComponent,
        HeaderComponent,
        NavigationComponent,
        UsersListComponent,
        DashboardComponent,
        ForumComponent,
        ForumFormComponent,
        ModalComponent,
        StopClickPropagationDirective,
        SnackBarComponent,
        FilesComponent,
        FileFormComponent,
        DragAndDropDirective,
        UserFormComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireModule,
        AngularFireDatabaseModule,
        AngularFireStorageModule,
        AngularFirestoreModule,
        LayoutModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        RouterModule.forRoot(appRoutes, { enableTracing: false }),
        CKEditorModule
    ],
    providers: [AuthService, FileService, AngularFireAuth, AngularFireAuthGuard, AngularFirestore, PostService, AngularFirestore],
    bootstrap: [AppComponent]
})
export class AppModule {
}
