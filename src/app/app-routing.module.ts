import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // component: HomeComponent
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];


// export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
