import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';

// Estas seran las rutas principales
const routes:Routes=[
  {
    path:'', // Esta vacio por que va a cargar paginas principales que estan en el modulo "pages"
    loadChildren:() => import('./pages/pages.module').then( m => m.PagesModule )
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  // Importamos el modulo RouterModule
    RouterModule.forRoot(routes)

  ],
  exports:[
  // Exportamos el RouterModule
    RouterModule,
  ]
})
export class AppRoutingModule { }
