import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { CreateRoleComponent } from './components/create-role/create-role.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { AdditionalInfoComponent } from './components/additional-info/additional-info.component';
import { UploadProfileImageComponent } from './components/upload-profile-image/upload-profile-image.component';

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
  { path: "", redirectTo: "register/createRole", pathMatch: "full" },
  { path: "**", component: NotFoundComponent } // Not Found page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
