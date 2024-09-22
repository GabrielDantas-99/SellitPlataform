import { Category } from "./category.dto";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  evaluation: number;
  categories: Category[];
}
