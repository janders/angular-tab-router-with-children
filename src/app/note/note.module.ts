import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import {
  NoteComponent,
  NoteDeleteComponent,
  NoteDetailComponent,
  NoteListComponent,
  NoteEditComponent
} from './';

import { NoteRoutingModule } from './note-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    NoteRoutingModule
  ],
  declarations: [
    NoteComponent,
    NoteDeleteComponent,
    NoteDetailComponent,
    NoteListComponent,
    NoteEditComponent
  ],
  exports: [
    NoteRoutingModule
  ]
})
export class NoteModule { }
