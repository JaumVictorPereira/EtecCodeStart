import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GradeAulasPage } from './grade-aulas.page';

const routes: Routes = [
  {
    path: '',
    component: GradeAulasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GradeAulasPage]
})
export class GradeAulasPageModule {}
