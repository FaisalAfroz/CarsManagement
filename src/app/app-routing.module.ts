import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CarListComponent } from './car-list/car-list.component';
import {AddCarComponent} from './add-car/add-car.component';

const routes: Routes = [
  {
  path: '',
  redirectTo: '/home', 
  pathMatch: 'full',
  component: HomeComponent
  },
  {
  path: 'carlist',
  component: CarListComponent
  },
  {
    path: 'addcar',
    component: AddCarComponent
    }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
