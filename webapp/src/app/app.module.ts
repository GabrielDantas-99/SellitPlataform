import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { DefaultComponent } from './admin/default/default.component';
import { SidebarComponent } from './admin/shared/sidebar/sidebar.component';
import { VisaogeralComponent } from './admin/visaogeral/visaogeral.component';
import { ProdutosComponent } from './admin/produtos/produtos.component';
import { CategoriasComponent } from './admin/categorias/categorias.component';
import { PedidosComponent } from './admin/pedidos/pedidos.component';
import { ClientesComponent } from './admin/clientes/clientes.component';
import { EntregasComponent } from './admin/entregas/entregas.component';
import { ConfiguracoesComponent } from './admin/configuracoes/configuracoes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    DefaultComponent,
    SidebarComponent,
    VisaogeralComponent,
    ProdutosComponent,
    CategoriasComponent,
    PedidosComponent,
    ClientesComponent,
    EntregasComponent,
    ConfiguracoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
