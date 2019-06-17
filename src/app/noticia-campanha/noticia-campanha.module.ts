import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NoticiaCampanhaPage } from './noticia-campanha.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiaCampanhaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NoticiaCampanhaPage]
})
export class NoticiaCampanhaPageModule {}
