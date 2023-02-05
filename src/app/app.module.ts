import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { FormStepsComponent } from './components/form-steps/form-steps.component';
import { CreateRoleComponent } from './components/create-role/create-role.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { AdditionalInfoComponent } from './components/additional-info/additional-info.component';
import { UploadProfileImageComponent } from './components/upload-profile-image/upload-profile-image.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FormStepsComponent,
    CreateRoleComponent,
    AdditionalInfoComponent,
    NotFoundComponent,
    CreateUserComponent,
    UploadProfileImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
