import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './components/persona/persona.component';
import { LoginComponent } from './components/persona/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
import { NavComponent } from './components/nav/nav.component';
import { RolComponent } from './components/rol/rol.component';
import { EstadoComponent } from './components/estado/estado.component';
import { AddEditRolComponent } from './components/rol/add-edit-rol/add-edit-rol.component';
import { AddEditEstadoComponent } from './components/estado/add-edit-estado/add-edit-estado.component';
import { SharedService } from './services/shared.service';
import { AdminPerComponent } from './components/persona/admin-per/admin-per.component';
import { IndexComponent } from './components/index/index.component';
import { EditPerComponent } from './components/persona/edit-per/edit-per.component';
import { CitaComponent } from './components/cita/cita.component';
import { AdminCitasComponent } from './components/cita/admin-citas/admin-citas.component';
import { DocCitasComponent } from './components/cita/doc-citas/doc-citas.component';
import { EditCitComponent } from './components/cita/edit-cit/edit-cit.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    LoginComponent,
    NavComponent,
    RolComponent,
    EstadoComponent,
    AddEditRolComponent,
    AddEditEstadoComponent,
    AdminPerComponent,
    IndexComponent,
    EditPerComponent,
    CitaComponent,
    AdminCitasComponent,
    DocCitasComponent,
    EditCitComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [AuthService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
