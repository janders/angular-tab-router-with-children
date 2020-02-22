import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoComponent } from './photo.component';

const routes: Routes = [
  { path: '', component: PhotoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    PhotoComponent
  ]
})
export class PhotoRoutingModule { }
