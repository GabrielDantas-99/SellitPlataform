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
import { AsyncPipe, NgIf } from "@angular/common";
import { Category } from "../../types/category.dto";
import { CategoryService } from "../../services/category.service";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

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
    AsyncPipe,
    MatProgressSpinnerModule,
    NgIf,
  ],
  templateUrl: "./shop.component.html",
  styleUrl: "./shop.component.css",
})
export class ShopComponent {
  products$: Observable<Product[]> | null = null;
  categories$: Observable<Category[]> | null = null;
  cart: Product[] = [];
  cartCount: number = 0;

  constructor(
    private router: Router,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.products$ = this.productService.findAll();
    this.categories$ = this.categoryService.findAll();
  }

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
