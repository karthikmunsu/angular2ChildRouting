import { NgModule } from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { SubChildComponent } from './sub-child/sub-child.component';

import {AuthService as UserGuard} from './auth/auth.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'home',
    canActivate: [ UserGuard ],
    data: {
      title: HomeComponent
    },
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: ':first',
        
        children: [
          {
            path: '',
            component: FirstChildComponent,
            data : {
              title: 'First Child'
            }
          },
          {
            path: ':subchild',
            component: SubChildComponent,
            data: {
              title: 'Sub Child'
            }
          }
      ]
      },
      {
        path: 'second',
        canActivate: [ UserGuard ],
        component: SecondChildComponent,
        data: {
          title: 'Second Child'
        }
      }
    ]
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
