import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {FormBuilderComponent} from './form-builder/form-builder.component';
import {TempConverterComponent} from './temp-converter/temp-converter.component';
import {FirebaseLoginComponent} from './firebase-login/firebase-login.component';
import { DummyPageComponent } from './dummy-page/dummy-page.component';

const routes: Routes = [
  {
  path:'login',
  component:LoginFormComponent,
  },

  {
  path:'formBuilder',
  component:FormBuilderComponent,
  },
  {
    path:'temp-conveter',
    component:TempConverterComponent
  },
  {
    path:'firebase-login',
    component:FirebaseLoginComponent
  },
  {
    path:'dummyPage',
    component:DummyPageComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
