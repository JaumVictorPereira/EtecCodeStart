import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './inicial/inicial.module#InicialPageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'noticia-trote', loadChildren: './noticia-trote/noticia-trote.module#NoticiaTrotePageModule' },
  { path: 'noticia-campanha', loadChildren: './noticia-campanha/noticia-campanha.module#NoticiaCampanhaPageModule' },
  { path: 'estagio', loadChildren: './estagio/estagio.module#EstagioPageModule' },
  { path: 'dica1', loadChildren: './dicas/dica1/dica1.module#Dica1PageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'interessados', loadChildren: './interessados/interessados.module#InteressadosPageModule' },
  { path: 'noticias', loadChildren: './noticias/noticias.module#NoticiasPageModule' },
  { path: 'calendario', loadChildren: './calendario/calendario.module#CalendarioPageModule' },
  { path: 'duvidas', loadChildren: './duvidas/duvidas.module#DuvidasPageModule' },
  { path: 'notas', loadChildren: './perfil/notas/notas.module#NotasPageModule' },
  { path: 'inicial', loadChildren: './inicial/inicial.module#InicialPageModule' },
  { path: 'grade-aulas', loadChildren: './perfil/grade-aulas/grade-aulas.module#GradeAulasPageModule' },
  { path: 'professores', loadChildren: './perfil/professores/professores.module#ProfessoresPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
