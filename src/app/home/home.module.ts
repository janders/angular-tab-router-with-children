import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// These should be in a shared folder/module
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import {
  HomeComponent
} from './'; // index.ts implied

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,

    MatTabsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,

    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeRoutingModule
  ]
})
export class HomeModule { }
