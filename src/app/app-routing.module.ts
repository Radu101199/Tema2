import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyModule } from './my-module/my-module.module';

const routes: Routes = [
  {
    path: 'my-module',
    loadChildren: () => MyModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
