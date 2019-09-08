import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClazyComponent } from './clazy/clazy.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'lazy',
    component: ClazyComponent
  }
];

@NgModule({
  declarations: [ClazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyModule { }
