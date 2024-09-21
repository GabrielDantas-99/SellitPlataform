import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { EntregasComponent } from './pages/entregas/entregas.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { VisaoGeralComponent } from './pages/visao-geral/visao-geral.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'visao-geral', component: VisaoGeralComponent },
      { path: 'produtos', component: ProdutosComponent },
      { path: 'categorias', component: CategoriasComponent },
      { path: 'pedidos', component: PedidosComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'entregas', component: EntregasComponent },
      { path: 'configuracoes', component: ConfiguracoesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
