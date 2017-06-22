import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  {
    path: 'contacts',
    component: MainComponent
  },
  {
    path: 'selectedContact/:id',
    component: MainComponent
  },
  {
    path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  },
]
export const appRouterModule = RouterModule.forRoot(routes);
