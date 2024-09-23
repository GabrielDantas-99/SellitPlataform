import { Component } from "@angular/core";
import { Product } from "../../types/product.dto";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { ProductService } from "../../services/product.service";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { RatingModule } from "primeng/rating";
import { FormsModule } from "@angular/forms";
import { CurrencyReaisPipe } from "../../pipes/currency-reais.pipe";
import { ButtonModule } from "primeng/button";
import { InputNumberModule } from "primeng/inputnumber";

@Component({
  selector: "app-product",
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NgFor,
    NgIf,
    AsyncPipe,
    RatingModule,
    FormsModule,
    CurrencyReaisPipe,
    ButtonModule,
    InputNumberModule,
  ],
  templateUrl: "./product.component.html",
  styleUrl: "./product.component.css",
})
export class ProductComponent {
  product$: Observable<Product> = null;
  productQuantity: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    const productId = this.route.snapshot.paramMap.get("productId");
    console.log("🚀 ~ ProductComponent ~ productId:", productId);
    this.product$ = this.productService.findById(productId);
    console.log("🚀 ~ ProductComponent ~ this.product$:", this.product$);
  }
}
