import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { NoteRoutingModule } from './note-routing.module';

import {
  NoteComponent,
  NoteDeleteComponent,
  NoteDetailComponent,
  NoteEditComponent,
  NoteListComponent
} from './';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NoteRoutingModule
  ],
  declarations: [
    NoteComponent,
    NoteDeleteComponent,
    NoteDetailComponent,
    NoteEditComponent,
    NoteListComponent
  ],
  exports: [
    NoteRoutingModule
  ]
})
export class NoteModule { }
