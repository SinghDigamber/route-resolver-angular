import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';

import { RouteResolver } from './resolvers/route.resolver';

const routes: Routes = [
  { 
    path: 'home', 
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    resolve: {
      routeResolver: RouteResolver
    },
  }, 
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouteResolver]
})

export class AppRoutingModule { }
