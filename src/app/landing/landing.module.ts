import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DogsComponent } from './dogs/dogs.component';
import { ListComponent } from './dogs/list/list.component';
import { CreateComponent } from './dogs/create/create.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
  ],
  declarations: [LandingComponent, DogsComponent, ListComponent, CreateComponent]
})
export class LandingModule { }
