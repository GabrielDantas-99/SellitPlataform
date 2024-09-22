import { NgClass, NgFor } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Category } from "../../../types/category.dto";

@Component({
  selector: "app-category-list",
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: "./category-list.component.html",
  styleUrl: "./category-list.component.css",
})
export class CategoryListComponent {
  @Input() categories: Category[] = [];
  @Output("navigate") onNavigate = new EventEmitter<number>();
  activeCategory: number = 0;

  navigate = (categoryId: number) => {
    this.activeCategory = categoryId;
    this.onNavigate.emit(categoryId);
  };
}
