import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "../../types/product.dto";
import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { CurrencyReaisPipe } from "../../pipes/currency-reais.pipe";
import { Observable } from "rxjs";

@Component({
  selector: "app-products-list",
  standalone: true,
  imports: [NgFor, CurrencyReaisPipe, NgIf],
  templateUrl: "./products-list.component.html",
  styleUrl: "./products-list.component.css",
})
export class ProductsListComponent {
  @Input() products: Product[] = null;
  constructor() {
    console.log("🚀 ~ ProductsListComponent ~ products:", this.products);
  }
  @Output() productToCart = new EventEmitter<Product>();

  addToCart = (product: Product) => {
    this.productToCart.emit(product);
  };
}
