import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Asegúrate de que estas rutas son correctas
import { LoginComponent } from './login/login.component'; // Asegúrate de que estas rutas son correctas

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  // Agrega más rutas según sea necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
