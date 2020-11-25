import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadoComponent } from './components/estado/estado.component';
import { AdminPerComponent } from './components/persona/admin-per/admin-per.component';
import { LoginComponent } from './components/persona/login/login.component';
import { PersonaComponent } from './components/persona/persona.component';
import { RolComponent } from './components/rol/rol.component';

const routes: Routes = [
  {path: 'persona', component:PersonaComponent},
  {path: 'login', component:LoginComponent},
  {path: 'rol', component:RolComponent},
  {path: 'estado', component:EstadoComponent},
  {path: 'admin-per', component:AdminPerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
