import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import { CreateComponent } from './product/create/create.component';
import { LoginGuard} from './login/login.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoginGuard],
    children: [
      {
        path: 'addProduct',
        component: CreateComponent
      },
      {
        path: 'dashboard',
        component: HomeComponent
      }
    ]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
