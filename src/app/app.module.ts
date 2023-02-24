import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { LoginComponent } from './core/auth/login/login.component';
import { FormStepsComponent } from './core/components/form-steps/form-steps.component';
import { CreateRoleComponent } from './core/components/create-role/create-role.component';
import { CreateUserComponent } from './core/components/create-user/create-user.component';
import { AdditionalInfoComponent } from './core/components/additional-info/additional-info.component';
import { UploadProfileImageComponent } from './core/components/upload-profile-image/upload-profile-image.component';
import { NotFoundComponent } from './core/auth/not-found/not-found.component';
import { CorpModule } from './clients/corporation/corp.module';

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
    CorpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
