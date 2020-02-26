import { Route } from '@angular/router';

import { HomeComponent } from './home.component';

export const HOME_ROUTE: Route = {
  path: '',
  component: HomeComponent,
  children: [
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
};
