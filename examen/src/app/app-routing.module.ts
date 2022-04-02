import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimationCoutComponent } from './estimation-cout/estimation-cout.component';
import { ListAnnoncesComponent } from './list-annonces/list-annonces.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'' , redirectTo:'login', pathMatch:'full'},
  {path:'login' , component:LoginComponent },
  {path:'list' , component:ListAnnoncesComponent},
  {path:'cout' , component:EstimationCoutComponent},
  {path:'navigation' , component:NavbarComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
