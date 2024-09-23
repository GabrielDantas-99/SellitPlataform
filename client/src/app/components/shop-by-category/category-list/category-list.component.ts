import { AsyncPipe, NgClass, NgFor, NgIf } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Category } from "../../../types/category.dto";
import { Observable } from "rxjs";
import { CategoryService } from "../../../services/category.service";

@Component({
  selector: "app-category-list",
  standalone: true,
  imports: [NgFor, NgClass, NgIf, AsyncPipe],
  templateUrl: "./category-list.component.html",
  styleUrl: "./category-list.component.css",
})
export class CategoryListComponent {
  @Output("navigate") onNavigate = new EventEmitter<number>();
  categories$: Observable<Category[]> = null;
  activeCategory: number = 0;

  constructor(private categoryService: CategoryService) {
    this.categories$ = this.categoryService.findAll();
  }

  navigate = (categoryId: number) => {
    this.activeCategory = categoryId;
    this.onNavigate.emit(categoryId);
  };
}
