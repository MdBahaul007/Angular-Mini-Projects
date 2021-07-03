import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { TempConverterComponent } from './temp-converter/temp-converter.component';
import { FirebaseLoginComponent } from './firebase-login/firebase-login.component';

  import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { DummyPageComponent } from './dummy-page/dummy-page.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    FormBuilderComponent,
    TempConverterComponent,
    FirebaseLoginComponent,
    DummyPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
