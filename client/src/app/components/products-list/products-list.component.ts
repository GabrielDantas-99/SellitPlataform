import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "../../types/product.dto";
import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { CurrencyReaisPipe } from "../../pipes/currency-reais.pipe";
import { Observable } from "rxjs";
import { ProductService } from "../../services/product.service";
import { MatProgressSpinner } from "@angular/material/progress-spinner";

@Component({
  selector: "app-products-list",
  standalone: true,
  imports: [NgFor, CurrencyReaisPipe, NgIf, MatProgressSpinner, AsyncPipe],
  templateUrl: "./products-list.component.html",
  styleUrl: "./products-list.component.css",
})
export class ProductsListComponent {
  @Output() productToCart = new EventEmitter<Product>();
  products$: Observable<Product[]> = null;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.findAll();
  }

  addToCart = (product: Product) => {
    this.productToCart.emit(product);
  };
}
