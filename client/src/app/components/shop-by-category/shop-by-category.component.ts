import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NgFor, NgIf } from "@angular/common";
import { CategoryListComponent } from "./category-list/category-list.component";
import { Category } from "../../types/category.dto";

@Component({
  selector: "app-shop-by-category",
  standalone: true,
  imports: [CategoryListComponent, NgFor, NgIf],
  templateUrl: "./shop-by-category.component.html",
  styleUrl: "./shop-by-category.component.css",
})
export class ShopByCategoryComponent {
  @Input() categories: Category[] = [];

  @Output("navigate") onNavigate = new EventEmitter<number>();

  navigate = (categoryId: number) => {
    this.onNavigate.emit(categoryId);
  };
}
