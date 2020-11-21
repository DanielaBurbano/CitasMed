import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/persona/login/login.component';
import { PersonaComponent } from './components/persona/persona.component';

const routes: Routes = [
  {path: 'persona', component:PersonaComponent},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
