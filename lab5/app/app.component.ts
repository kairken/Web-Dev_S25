import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = ['Косметика','Телефоны', 'Ноутбуки', 'Наушники'];

  allProducts: Product[] = [
    {
      id: 1,
      title: 'AXIS-Y сыворотка Dark Spot Correcting Glow для лица 50 мл',
      price: 1000,
      likes: 0,
      category: 'Косметика',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3c/h2c/86609939333150.jpg?format=gallery-medium',
      urlStore: 'https://kaspi.kz/shop/p/axis-y-syvorotka-dark-spot-correcting-glow-dlja-litsa-50-ml-104067981/?c=750000000'
    },
    {
      id: 2,
      title: 'Farmstay сыворотка All-In-One Collagen and Hyaluronic Acid Ampoule Anti-Wrinkle Whitening для лица 250 мл',
      price: 900,
      likes: 0,
      category: 'Косметика',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb0/h49/86609944150046.jpg?format=gallery-medium',
      urlStore: 'https://kaspi.kz/shop/p/farmstay-syvorotka-all-in-one-collagen-and-hyaluronic-acid-ampoule-anti-wrinkle-whitening-dlja-litsa-250-ml-100028087/?c=750000000'
    },
    {
      id: 3,
      title: 'Смартфон Apple iPhone 13 128Gb черный',
      price: 1500,
      likes: 0,
      category: 'Телефоны',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      urlStore: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      id: 4,
      title: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
      price: 1600,
      likes: 0,
      category: 'Телефоны',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      urlStore: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
    },
    {
      id: 5,
      title: 'Ноутбук ThundeRobot 911 X Wild Hunter G2',
      price: 200,
      likes: 0,
      category: 'Ноутбуки',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-medium',
      urlStore: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000'
    },
    {
      id: 6,
      title: 'Ноутбук Apple MacBook Air 13 2022',
      price: 300,
      likes: 0,
      category: 'Ноутбуки',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      urlStore: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000'
    },
    {
      id: 7,
      title: 'Наушники Apple AirPods Pro 2',
      price: 400,
      likes: 0,
      category: 'Наушники',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      urlStore: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000'
    },
    {
      id: 8,
      title: 'Наушники Apple AirPods 3',
      price: 350,
      likes: 0,
      category: 'Наушники',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
      urlStore: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000'
    }
  ];

  selectedCategory: string = '';
  filteredProducts: Product[] = [];

  constructor() {
    // По умолчанию выбирается первая категория
    this.onCategorySelect(this.categories[0]);
  }

  onCategorySelect(cat: string) {
    this.selectedCategory = cat;
    this.filteredProducts = this.allProducts.filter(p => p.category === cat);
  }
}
