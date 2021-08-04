import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { DogsComponent } from './dogs/dogs.component';
import {SharedModule} from '../shared/shared.module';
import { DogFormComponent } from './dogs/dog-form/dog-form.component';
import { DogFormModalComponent } from './dogs/dog-form-modal/dog-form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    DogsComponent,
    DogFormComponent,
    DogFormModalComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
