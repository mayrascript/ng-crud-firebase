import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { DogsComponent } from './dogs/dogs.component';
import {SharedModule} from '../shared/shared.module';
import { DogFormModalComponent } from './dogs/dog-form-modal/dog-form-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DogCardComponent } from './dogs/dog-card/dog-card.component';
import { DogListComponent } from './dogs/dog-list/dog-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    DogsComponent,
    DogFormModalComponent,
    DogCardComponent,
    DogListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
