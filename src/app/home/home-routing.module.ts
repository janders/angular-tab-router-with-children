import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './';

const routes: Routes = [
  // if we use loadChildren: './home/home.module#HomeModule' in app-routing use the following:
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'notes',
        pathMatch: 'full'
      },
      {
        path: 'notes',
        loadChildren: () => import('../note/note.module').then(m => m.NoteModule)
      },
      {
        path: 'photos',
        loadChildren: () => import('../photo/photo.module').then(m => m.PhotoModule)
      },
      {
        path: 'documents',
        loadChildren: () => import('../document/document.module').then(m => m.DocumentModule)
      }
    ]
  }
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
export class HomeRoutingModule { }
