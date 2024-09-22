import { Component } from "@angular/core";
import { HeaderComponent } from "../../components/header/header.component";
import { ShopByCategoryComponent } from "../../components/shop-by-category/shop-by-category.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { Router, RouterOutlet } from "@angular/router";
import { ProductsListComponent } from "../../components/products-list/products-list.component";
import { Product } from "../../types/product.dto";
import { FooterComponent } from "../../components/footer/footer.component";
import { Observable } from "rxjs";
import { ProductService } from "../../services/product.service";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { AsyncPipe, NgIf } from "@angular/common";

@Component({
  selector: "app-shop",
  standalone: true,
  imports: [
    HeaderComponent,
    ShopByCategoryComponent,
    BannerComponent,
    RouterOutlet,
    ProductsListComponent,
    FooterComponent,
    ProgressSpinnerModule,
    AsyncPipe,
    NgIf,
  ],
  templateUrl: "./shop.component.html",
  styleUrl: "./shop.component.css",
})
export class ShopComponent {
  constructor(private router: Router, private productService: ProductService) {
    this.products$ = this.productService.findAll();
    console.log(this.products$);
  }

  products$: Observable<Product[]> | null = null;

  cart: Product[] = [];
  cartCount: number = 0;

  addToCart(product: Product) {
    this.cart.push(product);
    console.log(this.cart);
    this.cartCount = this.cart.length;
  }

  navigate(categoryId: number) {
    // TODO: Alterar navegação para filtragem
    console.log(categoryId);
  }
}
