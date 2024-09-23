import { Component } from "@angular/core";
import { ShopByCategoryComponent } from "../../components/shop-by-category/shop-by-category.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { ProductsListComponent } from "../../components/products-list/products-list.component";
import { Product } from "../../types/product.dto";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: "app-shop",
  standalone: true,
  imports: [
    ShopByCategoryComponent,
    BannerComponent,
    ProductsListComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: "./shop.component.html",
  styleUrl: "./shop.component.css",
})
export class ShopComponent {
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
