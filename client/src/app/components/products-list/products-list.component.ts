import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "../../types/product.dto";
import { NgFor } from "@angular/common";
import { CurrencyReaisPipe } from "../../pipes/currency-reais.pipe";

@Component({
  selector: "app-products-list",
  standalone: true,
  imports: [NgFor, CurrencyReaisPipe],
  templateUrl: "./products-list.component.html",
  styleUrl: "./products-list.component.css",
})
export class ProductsListComponent {
  @Input() products: Product[] = [];
  @Output() productToCart = new EventEmitter<Product>();

  addToCart = (product: Product) => {
    this.productToCart.emit(product);
  };
}
