import { AuthGuard } from './guards/auth.guard';
import { BoardComponent } from './components/inside/board/board.component';
import { WorkspaceComponent } from './components/inside/workspace/workspace.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Componentes
import { HomeComponent } from './components/inside/home/home.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home/workspace',
    component: WorkspaceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home/workspace/:id',
    component: BoardComponent,
    canActivate: [AuthGuard],
  },

  { path: 'users',
    component: UserListComponent, 
  },

  { path: 'users/new',
    component: UserFormComponent
  },

  { 
    path: 'users/:id',
    component: UserDetailComponent
  },

  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
