import { Component } from "@angular/core";
import { HeaderComponent } from "../../components/header/header.component";
import { ShopByCategoryComponent } from "../../components/shop-by-category/shop-by-category.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { Router, RouterOutlet } from "@angular/router";
import { ProductsListComponent } from "../../components/products-list/products-list.component";
import { Product } from "../../types/product.dto";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: "app-shop",
  standalone: true,
  imports: [
    HeaderComponent,
    ShopByCategoryComponent,
    BannerComponent,
    RouterOutlet,
    ProductsListComponent,
    FooterComponent,
  ],
  templateUrl: "./shop.component.html",
  styleUrl: "./shop.component.css",
})
export class ShopComponent {
  constructor(private router: Router) {}

  productList: Product[] = [
    {
      id: "a1s2d3f4",
      name: "Camisa do Flamengo",
      categories: [
        {
          id: 1,
          name: "Futebol",
          route: "futebol",
        },
      ],
      description: "Esta é a descrição da Camisa oficial do Flamengo",
      imgUrl: null,
      price: 320.9,
      evaluation: 4.7,
    },
    {
      id: "b2g4h5j6",
      name: "Camisa do Corinthians",
      categories: [
        {
          id: 1,
          name: "Futebol",
          route: "futebol",
        },
      ],
      description: "Camisa oficial do Corinthians para temporada 2024",
      imgUrl: null,
      price: 299.9,
      evaluation: 4.5,
    },
    {
      id: "c3i5j7k8",
      name: "Camisa do São Paulo",
      categories: [
        {
          id: 1,
          name: "Futebol",
          route: "futebol",
        },
      ],
      description: "Camisa oficial do São Paulo com novo design",
      imgUrl: null,
      price: 310.0,
      evaluation: 4.6,
    },
    {
      id: "d4k6l8m9",
      name: "Chuteira Nike Mercurial",
      categories: [
        {
          id: 2,
          name: "Esportes",
          route: "esportes",
        },
      ],
      description: "Chuteira Nike Mercurial para jogos de futebol",
      imgUrl: null,
      price: 450.0,
      evaluation: 4.9,
    },
    {
      id: "e5m7n9o1",
      name: "Bola de Futebol Adidas",
      categories: [
        {
          id: 1,
          name: "Futebol",
          route: "futebol",
        },
      ],
      description: "Bola de futebol Adidas oficial para campeonatos",
      imgUrl: null,
      price: 150.0,
      evaluation: 4.8,
    },
    {
      id: "f6n8o1p2",
      name: "Camisa do Palmeiras",
      categories: [
        {
          id: 1,
          name: "Futebol",
          route: "futebol",
        },
      ],
      description: "Camisa oficial do Palmeiras para temporada 2024",
      imgUrl: null,
      price: 290.5,
      evaluation: 4.4,
    },
    {
      id: "g7o1p3q4",
      name: "Short de Corrida Nike",
      categories: [
        {
          id: 3,
          name: "Corrida",
          route: "corrida",
        },
      ],
      description: "Short leve e confortável para corridas",
      imgUrl: null,
      price: 120.0,
      evaluation: 4.7,
    },
    {
      id: "h8p2q4r5",
      name: "Tênis Adidas Ultraboost",
      categories: [
        {
          id: 4,
          name: "Corrida",
          route: "corrida",
        },
      ],
      description: "Tênis de corrida Adidas Ultraboost com tecnologia avançada",
      imgUrl: null,
      price: 599.9,
      evaluation: 4.9,
    },
  ];

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
