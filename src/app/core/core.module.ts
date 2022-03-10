import { NgModule } from '@angular/core';
import { ListRelationsComponent } from './components/list-relations/list-relations.component';
import { CreateRelationsComponent } from './components/create-relations/create-relations.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';



@NgModule({
  declarations: [
    ListRelationsComponent,
    CreateRelationsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    SharedModule
  ]
})
export class CoreModule { }
