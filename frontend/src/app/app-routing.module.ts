import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCarroComponent } from './paginas/lista-carro/lista-carro.component';
import { CriaCarroComponent } from './paginas/cria-carro/cria-carro.component';
import { EditaCarroComponent } from './paginas/edita-carro/edita-carro.component';
import { DeletaCarroComponent } from './paginas/deleta-carro/deleta-carro.component';


const routes: Routes = [
  { path: '', component: ListaCarroComponent },
  { path: 'cria', component: CriaCarroComponent },
  { path: 'edita/:carroId', component: EditaCarroComponent },
  { path: 'deleta/:carroId', component: DeletaCarroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
