import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GravatarModule } from 'ngx-gravatar';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
 
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    GravatarModule
  ]
})
export class UsersModule { }
