import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Importamos Modulos Principales
import { EcommerceModule } from './ecommerce/ecommerce.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

// Importamos el RouterModule (Rutas principales)
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Importamos los modulos de ruteo
    AppRoutingModule,

    //Importamos los modulos Ecommerce, Pages y Shared
    EcommerceModule,
    PagesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

