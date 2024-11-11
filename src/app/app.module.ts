import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { MenuComponent } from './menu/menu.component';
import { HijococheComponent } from './components/hijocoche/hijocoche.component';
import { PadrecochesComponent } from './components/padrecoches/padrecoches.component';
import { PadredeportesComponent } from './components/padredeportes/padredeportes.component';
import { HijodeporteComponent } from './components/hijodeporte/hijodeporte.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    MenuComponent,
    HijococheComponent,
    PadrecochesComponent,
    PadredeportesComponent,
    HijodeporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
