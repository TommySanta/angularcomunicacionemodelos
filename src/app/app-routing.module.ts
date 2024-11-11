import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { PadrecochesComponent } from './components/padrecoches/padrecoches.component';
import { PadredeportesComponent } from './components/padredeportes/padredeportes.component';

const routes: Routes = [
  {path: "productos", component: ListaProductosComponent},
  {path: "padrecohes", component: PadrecochesComponent},
  {path: "padredeportes", component: PadredeportesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }