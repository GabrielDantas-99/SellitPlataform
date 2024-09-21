import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './admin/categorias/categorias.component';
import { ClientesComponent } from './admin/clientes/clientes.component';
import { ConfiguracoesComponent } from './admin/configuracoes/configuracoes.component';
import { DefaultComponent } from './admin/default/default.component';
import { EntregasComponent } from './admin/entregas/entregas.component';
import { PedidosComponent } from './admin/pedidos/pedidos.component';
import { ProdutosComponent } from './admin/produtos/produtos.component';
import { VisaogeralComponent } from './admin/visaogeral/visaogeral.component';

const routes: Routes = [
  { path: '', component: DefaultComponent,
  children: [
    { path: 'visaogeral', component: VisaogeralComponent },
    { path: 'produtos', component: ProdutosComponent },
    { path: 'categorias', component: CategoriasComponent },
    { path: 'pedidos', component: PedidosComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'entregas', component: EntregasComponent },
    { path: 'configuracoes', component: ConfiguracoesComponent },
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
