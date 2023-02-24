import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';

import { RegisterComponent } from './core/auth/register/register.component';
import { NotFoundComponent } from './core/auth/not-found/not-found.component';

import { CreateRoleComponent } from './core/components/create-role/create-role.component';
import { CreateUserComponent } from './core/components/create-user/create-user.component';
import { AdditionalInfoComponent } from './core/components/additional-info/additional-info.component';
import { UploadProfileImageComponent } from './core/components/upload-profile-image/upload-profile-image.component';

const routes: Routes = [
  {
    path: "register", component: RegisterComponent,
    children: [
      { path: "createRole", component: CreateRoleComponent, },
      { path: "createUser", component: CreateUserComponent, },
      { path: "additionalInfo", component: AdditionalInfoComponent, },
      { path: "uploadProfileImage", component: UploadProfileImageComponent, },
      
    ]
  },
  { path: "", redirectTo: "register/createRole", pathMatch: "full" }, // Homepage
  { path: "**", component: NotFoundComponent } // Not Found page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
