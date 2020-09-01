import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';

const routes: Routes = [
  {path:"", component:LoginUsuarioComponent},
  {path:"login-admin", component:LoginAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
