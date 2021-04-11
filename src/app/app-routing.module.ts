import { IngresarComponent } from './paginas/ingresar/ingresar.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {path: 'inicio', component: InicioComponent },
  {path: 'ingresar', component: IngresarComponent },
  {path: '**', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
