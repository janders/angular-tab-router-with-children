import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { NoteComponent } from './note.component';

import {
  NoteComponent,
  NoteDeleteComponent,
  NoteDetailComponent,
  NoteListComponent,
  NoteEditComponent
} from './';

const routes: Routes = [
  {
    path: '',
    component: NoteComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: NoteListComponent,
        data:
        {
          title: 'List',
        }
      },
      {
        path: 'edit',
        component: NoteEditComponent,
        data:
        {
          title: 'Edit',
        }
      },
      {
        path: 'detail/:id',
        component: NoteDetailComponent,
        data:
        {
          title: 'Detail',
        }
      },
      {
        path: 'delete/:id',
        component: NoteDeleteComponent,
        data:
        {
          title: 'Delete',
        }
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class NoteRoutingModule { }
