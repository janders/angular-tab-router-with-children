import { NgModule } from '@angular/core';

import { 
  MatButtonModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
