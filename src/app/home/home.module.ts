import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material.module';

import {
  HomeComponent
} from './'; // index.ts implied

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeRoutingModule
  ]
})
export class HomeModule { }
