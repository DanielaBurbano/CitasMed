import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCitasComponent } from './components/cita/admin-citas/admin-citas.component';
import { CitaComponent } from './components/cita/cita.component';
import { DocCitasComponent } from './components/cita/doc-citas/doc-citas.component';
import { EstadoComponent } from './components/estado/estado.component';
import { IndexComponent } from './components/index/index.component';
import { AdminPerComponent } from './components/persona/admin-per/admin-per.component';
import { LoginComponent } from './components/persona/login/login.component';
import { PersonaComponent } from './components/persona/persona.component';
import { RolComponent } from './components/rol/rol.component';

const routes: Routes = [
  {path: 'index', component:IndexComponent},
  {path: 'persona', component:PersonaComponent},
  {path: 'login', component:LoginComponent},
  {path: 'rol', component:RolComponent},
  {path: 'estado', component:EstadoComponent},
  {path: 'admin-per', component:AdminPerComponent},
  {path: 'citas', component:CitaComponent},
  {path: 'admin-cit', component:AdminCitasComponent},
  {path: 'doc-cit', component:DocCitasComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
