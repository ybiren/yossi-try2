import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YossiComponent } from './yossi/yossi.component';

const routes: Routes = [
  { path: 'aa', component: YossiComponent },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }