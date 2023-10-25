import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

const routes: Routes = [
  {path:"", component:LoginFormComponent},
  {path:"login", component:LoginFormComponent},
  // {path:"login/registration", component:RegistrationFormComponent},
  {path:"registration", component:RegistrationFormComponent},
  // {path:"registration", component:LoginFormComponent},
  {path:"dashboard", component:DashBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
