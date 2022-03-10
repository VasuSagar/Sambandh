import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRelationsComponent } from './core/components/create-relations/create-relations.component';
import { ListRelationsComponent } from './core/components/list-relations/list-relations.component';
import { LoginComponent } from './core/components/login/login.component';
import { SignupComponent } from './core/components/signup/signup.component';

const routes: Routes = [
  {path:'list',component:ListRelationsComponent},
  {path:'create',component:CreateRelationsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
