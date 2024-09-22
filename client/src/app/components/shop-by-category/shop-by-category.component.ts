import { Component, EventEmitter, Output } from "@angular/core";
import { NgFor } from "@angular/common";
import { CategoryListComponent } from "./category-list/category-list.component";
import { Category } from "../../types/category.dto";

@Component({
  selector: "app-shop-by-category",
  standalone: true,
  imports: [CategoryListComponent, NgFor],
  templateUrl: "./shop-by-category.component.html",
  styleUrl: "./shop-by-category.component.css",
})
export class ShopByCategoryComponent {
  categories: Category[] = [
    {
      id: 1,
      name: "Camisas de Time",
      route: "/camisetas-de-time",
    },
    {
      id: 2,
      name: "Mochilas",
      route: "/mochilas",
    },
    {
      id: 3,
      name: "Tenis",
      route: "/tenis",
    },
    {
      id: 4,
      name: "Suplementos",
      route: "/suplementos",
    },
    {
      id: 5,
      name: "Chuteiras",
      route: "/chuteiras",
    },
    {
      id: 6,
      name: "Jaquetas e Casacos",
      route: "/jaquetas-e-casacos",
    },
  ];

  @Output("navigate") onNavigate = new EventEmitter<number>();

  navigate = (categoryId: number) => {
    this.onNavigate.emit(categoryId);
  };
}
