import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { MaterialModule } from '../shared/material/material.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { EntregasComponent } from './pages/entregas/entregas.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { VisaoGeralComponent } from './pages/visao-geral/visao-geral.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    SidebarComponent,
    CategoriasComponent,
    ClientesComponent,
    ConfiguracoesComponent,
    EntregasComponent,
    PedidosComponent,
    ProdutosComponent,
    VisaoGeralComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, MaterialModule],
})
export class AdminModule {}
